/* global angular */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { defaultConfig } from './datasets/defaultConfig';

const trackerCapture = angular.module('trackerCapture');

const getInitialConfig = (get, create) =>
  get('growthTracker', 'config')
    .then(result => result.data)
    .catch(
      () =>
        create('growthTracker', 'config', defaultConfig)
          .then(() => defaultConfig)
          .catch(err => console.log(err)), // TODO: Figure out what to do if both config collection and config creation fails
    );

trackerCapture
  .controller(
    'GrowthTrackingController',
    (
      $scope,
      $location,
      DHIS2EventFactory,
      DHIS2DataElementFactory,
      DataStoreFactory,
    ) => {
      $scope.selectedTeiId = $location.search().tei;
      $scope.trackedEvents = DHIS2EventFactory.getEventsByProgram(
        $scope.selectedTeiId,
        null,
      ).then(events => events);
      $scope.dataElements = DHIS2DataElementFactory.getDataElements().then(
        dataElements => dataElements,
      );

      $scope.dataStoreFunctions = DataStoreFactory;
    },
  )
  .directive('reactapp', () => ({
    restrict: 'E',

    link: (scope, el) => {
      const initialConfig = getInitialConfig(
        scope.dataStoreFunctions.get,
        scope.dataStoreFunctions.create,
      );

      Promise.all([
        scope.trackedEvents,
        scope.dataElements,
        initialConfig,
      ]).then(values => {
        ReactDOM.render(
          <App
            events={values[0]}
            dataElements={values[1]}
            initialConfig={values[2]}
            updateConfig={scope.dataStoreFunctions.update}
          />,
          el[0],
        );
      });
    },
  }));
