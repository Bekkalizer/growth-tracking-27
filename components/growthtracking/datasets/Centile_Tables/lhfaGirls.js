const lhfaGirls = {
    0: { L:1, M:49.1477, S:0.0379, P01:43.392, P1:44.814, P3:45.644, P5:46.084, P10:46.761, P15:47.217, P25:47.891, P50:49.148, P75:50.404, P85:51.078, P90:51.535, P95:52.212, P97:52.651, P99:53.481, P999:54.904},
    5: { L:1, M:49.9921, S:0.03756, P01:44.19, P1:45.624, P3:46.461, P5:46.904, P10:47.586, P15:48.046, P25:48.726, P50:49.992, P75:51.259, P85:51.938, P90:52.398, P95:53.081, P97:53.524, P99:54.36, P999:55.795},
    10: { L:1, M:50.8365, S:0.03722, P01:44.989, P1:46.435, P3:47.278, P5:47.724, P10:48.412, P15:48.875, P25:49.56, P50:50.837, P75:52.113, P85:52.798, P90:53.261, P95:53.949, P97:54.395, P99:55.238, P999:56.684},
    15: { L:1, M:51.651, S:0.0369, P01:45.761, P1:47.217, P3:48.066, P5:48.516, P10:49.208, P15:49.676, P25:50.365, P50:51.651, P75:52.937, P85:53.626, P90:54.094, P95:54.786, P97:55.236, P99:56.085, P999:57.541},
    20: { L:1, M:52.3353, S:0.03673, P01:46.395, P1:47.863, P3:48.72, P5:49.173, P10:49.872, P15:50.343, P25:51.039, P50:52.335, P75:53.632, P85:54.328, P90:54.799, P95:55.497, P97:55.951, P99:56.807, P999:58.276},
    25: { L:1, M:52.9963, S:0.03656, P01:47.009, P1:48.489, P3:49.352, P5:49.809, P10:50.513, P15:50.988, P25:51.689, P50:52.996, P75:54.303, P85:55.004, P90:55.479, P95:56.183, P97:56.64, P99:57.504, P999:58.984},
    30: { L:1, M:53.6326, S:0.03641, P01:47.598, P1:49.09, P3:49.96, P5:50.421, P10:51.13, P15:51.609, P25:52.315, P50:53.633, P75:54.95, P85:55.657, P90:56.135, P95:56.845, P97:57.305, P99:58.175, P999:59.667},
    35: { L:1, M:54.2454, S:0.03627, P01:48.165, P1:49.668, P3:50.545, P5:51.009, P10:51.724, P15:52.206, P25:52.918, P50:54.245, P75:55.572, P85:56.285, P90:56.767, P95:57.482, P97:57.946, P99:58.822, P999:60.325},
    40: { L:1, M:54.8348, S:0.03614, P01:48.711, P1:50.225, P3:51.108, P5:51.575, P10:52.295, P15:52.781, P25:53.498, P50:54.835, P75:56.171, P85:56.889, P90:57.374, P95:58.094, P97:58.562, P99:59.445, P999:60.959},
    45: { L:1, M:55.4021, S:0.03602, P01:49.235, P1:50.76, P3:51.649, P5:52.12, P10:52.845, P15:53.334, P25:54.056, P50:55.402, P75:56.748, P85:57.47, P90:57.96, P95:58.685, P97:59.155, P99:60.045, P999:61.569},
    50: { L:1, M:55.9482, S:0.03591, P01:49.74, P1:51.274, P3:52.169, P5:52.644, P10:53.373, P15:53.866, P25:54.593, P50:55.948, P75:57.303, P85:58.03, P90:58.523, P95:59.253, P97:59.727, P99:60.622, P999:62.157},
    55: { L:1, M:56.4739, S:0.0358, P01:50.226, P1:51.771, P3:52.671, P5:53.148, P10:53.883, P15:54.378, P25:55.11, P50:56.474, P75:57.838, P85:58.569, P90:59.065, P95:59.799, P97:60.276, P99:61.177, P999:62.722},
    60: { L:1, M:56.9805, S:0.0357, P01:50.694, P1:52.248, P3:53.155, P5:53.635, P10:54.374, P15:54.872, P25:55.608, P50:56.981, P75:58.353, P85:59.089, P90:59.587, P95:60.326, P97:60.806, P99:61.713, P999:63.267},
    65: { L:1, M:57.4699, S:0.03561, P01:51.146, P1:52.709, P3:53.621, P5:54.104, P10:54.847, P15:55.349, P25:56.09, P50:57.47, P75:58.85, P85:59.591, P90:60.093, P95:60.836, P97:61.319, P99:62.231, P999:63.794},
    70: { L:1, M:57.9436, S:0.03552, P01:51.583, P1:53.156, P3:54.073, P5:54.558, P10:55.306, P15:55.81, P25:56.555, P50:57.944, P75:59.332, P85:60.077, P90:60.581, P95:61.329, P97:61.815, P99:62.732, P999:64.304},
    75: { L:1, M:58.4022, S:0.03543, P01:52.008, P1:53.589, P3:54.51, P5:54.999, P10:55.75, P15:56.258, P25:57.007, P50:58.402, P75:59.798, P85:60.547, P90:61.054, P95:61.806, P97:62.294, P99:63.216, P999:64.796},
    80: { L:1, M:58.8465, S:0.03536, P01:52.416, P1:54.006, P3:54.933, P5:55.424, P10:56.18, P15:56.69, P25:57.443, P50:58.847, P75:60.25, P85:61.003, P90:61.513, P95:62.269, P97:62.76, P99:63.687, P999:65.277},
    85: { L:1, M:59.2773, S:0.03528, P01:52.815, P1:54.412, P3:55.344, P5:55.837, P10:56.597, P15:57.11, P25:57.867, P50:59.277, P75:60.688, P85:61.445, P90:61.957, P95:62.717, P97:63.211, P99:64.142, P999:65.74},
    90: { L:1, M:59.6952, S:0.03521, P01:53.2, P1:54.806, P3:55.742, P5:56.238, P10:57.002, P15:57.517, P25:58.278, P50:59.695, P75:61.113, P85:61.874, P90:62.389, P95:63.152, P97:63.648, P99:64.585, P999:66.19},
    95: { L:1, M:60.1011, S:0.03515, P01:53.573, P1:55.187, P3:56.128, P5:56.626, P10:57.394, P15:57.912, P25:58.676, P50:60.101, P75:61.526, P85:62.291, P90:62.808, P95:63.576, P97:64.074, P99:65.016, P999:66.629},
    100: { L:1, M:60.4958, S:0.03509, P01:53.936, P1:55.557, P3:56.503, P5:57.004, P10:57.775, P15:58.296, P25:59.064, P50:60.496, P75:61.928, P85:62.696, P90:63.216, P95:63.987, P97:64.488, P99:65.434, P999:67.056},
    105: { L:1, M:60.8795, S:0.03503, P01:54.289, P1:55.918, P3:56.869, P5:57.372, P10:58.146, P15:58.669, P25:59.441, P50:60.88, P75:62.318, P85:63.09, P90:63.613, P95:64.387, P97:64.89, P99:65.841, P999:67.47},
    110: { L:1, M:61.2527, S:0.03497, P01:54.633, P1:56.27, P3:57.224, P5:57.729, P10:58.508, P15:59.033, P25:59.808, P50:61.253, P75:62.697, P85:63.473, P90:63.998, P95:64.776, P97:65.281, P99:66.236, P999:67.872},
    115: { L:1, M:61.6156, S:0.03492, P01:54.967, P1:56.61, P3:57.569, P5:58.077, P10:58.858, P15:59.386, P25:60.164, P50:61.616, P75:63.067, P85:63.846, P90:64.373, P95:65.155, P97:65.662, P99:66.621, P999:68.265},
    120: { L:1, M:61.9686, S:0.03487, P01:55.291, P1:56.942, P3:57.904, P5:58.414, P10:59.199, P15:59.729, P25:60.511, P50:61.969, P75:63.426, P85:64.208, P90:64.738, P95:65.523, P97:66.033, P99:66.995, P999:68.646},
    125: { L:1, M:62.312, S:0.03483, P01:55.605, P1:57.263, P3:58.23, P5:58.742, P10:59.531, P15:60.063, P25:60.848, P50:62.312, P75:63.776, P85:64.561, P90:65.093, P95:65.882, P97:66.394, P99:67.361, P999:69.019},
    130: { L:1, M:62.6461, S:0.03479, P01:55.911, P1:57.576, P3:58.547, P5:59.061, P10:59.853, P15:60.387, P25:61.176, P50:62.646, P75:64.116, P85:64.905, P90:65.439, P95:66.231, P97:66.745, P99:67.716, P999:69.381},
    135: { L:1, M:62.9714, S:0.03475, P01:56.209, P1:57.881, P3:58.856, P5:59.372, P10:60.167, P15:60.703, P25:61.495, P50:62.971, P75:64.447, P85:65.239, P90:65.776, P95:66.571, P97:67.087, P99:68.062, P999:69.734},
    140: { L:1, M:63.2884, S:0.03471, P01:56.5, P1:58.178, P3:59.157, P5:59.675, P10:60.473, P15:61.012, P25:61.807, P50:63.288, P75:64.77, P85:65.565, P90:66.104, P95:66.902, P97:67.42, P99:68.399, P999:70.077},
    145: { L:1, M:63.5978, S:0.03467, P01:56.784, P1:58.468, P3:59.451, P5:59.971, P10:60.772, P15:61.313, P25:62.111, P50:63.598, P75:65.085, P85:65.883, P90:66.424, P95:67.225, P97:67.745, P99:68.727, P999:70.412},
    150: { L:1, M:63.9, S:0.03464, P01:57.06, P1:58.751, P3:59.737, P5:60.259, P10:61.063, P15:61.606, P25:62.407, P50:63.9, P75:65.393, P85:66.194, P90:66.737, P95:67.541, P97:68.063, P99:69.049, P999:70.74},
    155: { L:1, M:64.1956, S:0.03461, P01:57.33, P1:59.027, P3:60.017, P5:60.541, P10:61.348, P15:61.893, P25:62.697, P50:64.196, P75:65.694, P85:66.498, P90:67.043, P95:67.85, P97:68.374, P99:69.364, P999:71.062},
    160: { L:1, M:64.485, S:0.03458, P01:57.594, P1:59.297, P3:60.291, P5:60.817, P10:61.627, P15:62.174, P25:62.981, P50:64.485, P75:65.989, P85:66.796, P90:67.343, P95:68.153, P97:68.679, P99:69.673, P999:71.376},
    165: { L:1, M:64.7688, S:0.03455, P01:57.854, P1:59.563, P3:60.56, P5:61.088, P10:61.901, P15:62.45, P25:63.259, P50:64.769, P75:66.278, P85:67.088, P90:67.637, P95:68.45, P97:68.978, P99:69.975, P999:71.684},
    170: { L:1, M:65.0474, S:0.03453, P01:58.106, P1:59.822, P3:60.823, P5:61.353, P10:62.169, P15:62.719, P25:63.532, P50:65.047, P75:66.562, P85:67.375, P90:67.926, P95:68.742, P97:69.272, P99:70.273, P999:71.988},
    175: { L:1, M:65.3214, S:0.03451, P01:58.355, P1:60.077, P3:61.082, P5:61.614, P10:62.432, P15:62.985, P25:63.801, P50:65.321, P75:66.842, P85:67.658, P90:68.21, P95:69.029, P97:69.561, P99:70.566, P999:72.288},
    180: { L:1, M:65.5911, S:0.03449, P01:58.6, P1:60.328, P3:61.336, P5:61.87, P10:62.692, P15:63.246, P25:64.065, P50:65.591, P75:67.117, P85:67.936, P90:68.49, P95:69.312, P97:69.846, P99:70.854, P999:72.582},
    185: { L:1, M:65.8568, S:0.03447, P01:58.842, P1:60.576, P3:61.587, P5:62.123, P10:62.948, P15:63.504, P25:64.326, P50:65.857, P75:67.388, P85:68.21, P90:68.766, P95:69.591, P97:70.126, P99:71.138, P999:72.872},
    190: { L:1, M:66.1189, S:0.03446, P01:59.078, P1:60.818, P3:61.834, P5:62.371, P10:63.199, P15:63.757, P25:64.582, P50:66.119, P75:67.656, P85:68.48, P90:69.039, P95:69.867, P97:70.404, P99:71.419, P999:73.16},
    195: { L:1, M:66.3776, S:0.03444, P01:59.313, P1:61.059, P3:62.078, P5:62.617, P10:63.448, P15:64.008, P25:64.836, P50:66.378, P75:67.92, P85:68.747, P90:69.307, P95:70.138, P97:70.677, P99:71.696, P999:73.442},
    200: { L:1, M:66.6331, S:0.03443, P01:59.544, P1:61.296, P3:62.318, P5:62.86, P10:63.693, P15:64.255, P25:65.086, P50:66.633, P75:68.18, P85:69.011, P90:69.573, P95:70.407, P97:70.948, P99:71.97, P999:73.723},
    205: { L:1, M:66.8857, S:0.03442, P01:59.771, P1:61.53, P3:62.556, P5:63.099, P10:63.935, P15:64.5, P25:65.333, P50:66.886, P75:68.439, P85:69.272, P90:69.836, P95:70.672, P97:71.216, P99:72.241, P999:74},
    210: { L:1, M:67.1355, S:0.03441, P01:59.997, P1:61.761, P3:62.791, P5:63.336, P10:64.175, P15:64.741, P25:65.577, P50:67.136, P75:68.694, P85:69.53, P90:70.096, P95:70.935, P97:71.48, P99:72.51, P999:74.274},
    215: { L:1, M:67.3828, S:0.03441, P01:60.218, P1:61.989, P3:63.022, P5:63.569, P10:64.411, P15:64.98, P25:65.819, P50:67.383, P75:68.947, P85:69.786, P90:70.354, P95:71.197, P97:71.744, P99:72.777, P999:74.548},
    220: { L:1, M:67.6277, S:0.0344, P01:60.439, P1:62.216, P3:63.252, P5:63.801, P10:64.646, P15:65.217, P25:66.059, P50:67.628, P75:69.197, P85:70.039, P90:70.609, P95:71.454, P97:72.003, P99:73.04, P999:74.817},
    225: { L:1, M:67.8703, S:0.0344, P01:60.655, P1:62.439, P3:63.479, P5:64.03, P10:64.878, P15:65.45, P25:66.296, P50:67.87, P75:69.445, P85:70.29, P90:70.862, P95:71.711, P97:72.261, P99:73.302, P999:75.085},
    230: { L:1, M:68.1107, S:0.0344, P01:60.87, P1:62.66, P3:63.704, P5:64.257, P10:65.108, P15:65.682, P25:66.53, P50:68.111, P75:69.691, P85:70.539, P90:71.113, P95:71.965, P97:72.517, P99:73.561, P999:75.351},
    235: { L:1, M:68.3491, S:0.0344, P01:61.083, P1:62.879, P3:63.927, P5:64.482, P10:65.336, P15:65.912, P25:66.763, P50:68.349, P75:69.935, P85:70.786, P90:71.362, P95:72.216, P97:72.771, P99:73.819, P999:75.615},
    240: { L:1, M:68.5855, S:0.0344, P01:61.295, P1:63.097, P3:64.148, P5:64.705, P10:65.562, P15:66.14, P25:66.994, P50:68.586, P75:70.177, P85:71.031, P90:71.609, P95:72.466, P97:73.023, P99:74.074, P999:75.876},
    245: { L:1, M:68.82, S:0.0344, P01:61.504, P1:63.313, P3:64.367, P5:64.926, P10:65.786, P15:66.366, P25:67.223, P50:68.82, P75:70.417, P85:71.274, P90:71.854, P95:72.714, P97:73.273, P99:74.327, P999:76.136},
    250: { L:1, M:69.0527, S:0.0344, P01:61.712, P1:63.527, P3:64.585, P5:65.145, P10:66.008, P15:66.591, P25:67.451, P50:69.053, P75:70.655, P85:71.515, P90:72.097, P95:72.96, P97:73.52, P99:74.579, P999:76.393},
    255: { L:1, M:69.2836, S:0.03441, P01:61.916, P1:63.737, P3:64.8, P5:65.362, P10:66.228, P15:66.813, P25:67.676, P50:69.284, P75:70.892, P85:71.755, P90:72.339, P95:73.205, P97:73.768, P99:74.83, P999:76.651},
    260: { L:1, M:69.5129, S:0.03442, P01:62.119, P1:63.947, P3:65.013, P5:65.577, P10:66.447, P15:67.033, P25:67.899, P50:69.513, P75:71.127, P85:71.993, P90:72.579, P95:73.448, P97:74.013, P99:75.079, P999:76.907},
    265: { L:1, M:69.7405, S:0.03442, P01:62.322, P1:64.156, P3:65.226, P5:65.792, P10:66.664, P15:67.253, P25:68.121, P50:69.741, P75:71.36, P85:72.228, P90:72.817, P95:73.689, P97:74.255, P99:75.325, P999:77.159},
    270: { L:1, M:69.9666, S:0.03443, P01:62.522, P1:64.363, P3:65.436, P5:66.004, P10:66.879, P15:67.47, P25:68.342, P50:69.967, P75:71.591, P85:72.463, P90:73.054, P95:73.929, P97:74.497, P99:75.571, P999:77.411},
    275: { L:1, M:70.1911, S:0.03444, P01:62.721, P1:64.567, P3:65.645, P5:66.215, P10:67.093, P15:67.686, P25:68.561, P50:70.191, P75:71.822, P85:72.697, P90:73.289, P95:74.167, P97:74.738, P99:75.815, P999:77.661},
    280: { L:1, M:70.4142, S:0.03445, P01:62.918, P1:64.771, P3:65.852, P5:66.424, P10:67.305, P15:67.9, P25:68.778, P50:70.414, P75:72.05, P85:72.928, P90:73.523, P95:74.404, P97:74.977, P99:76.057, P999:77.91},
    285: { L:1, M:70.6359, S:0.03447, P01:63.112, P1:64.972, P3:66.057, P5:66.631, P10:67.516, P15:68.112, P25:68.994, P50:70.636, P75:72.278, P85:73.159, P90:73.756, P95:74.641, P97:75.215, P99:76.3, P999:78.16},
    290: { L:1, M:70.8561, S:0.03448, P01:63.306, P1:65.173, P3:66.261, P5:66.838, P10:67.725, P15:68.324, P25:69.208, P50:70.856, P75:72.504, P85:73.388, P90:73.987, P95:74.875, P97:75.451, P99:76.54, P999:78.406},
    295: { L:1, M:71.075, S:0.0345, P01:63.497, P1:65.371, P3:66.463, P5:67.042, P10:67.933, P15:68.534, P25:69.421, P50:71.075, P75:72.729, P85:73.616, P90:74.217, P95:75.108, P97:75.687, P99:76.779, P999:78.653},
    300: { L:1, M:71.2926, S:0.03451, P01:63.69, P1:65.569, P3:66.665, P5:67.246, P10:68.14, P15:68.743, P25:69.633, P50:71.293, P75:72.952, P85:73.843, P90:74.446, P95:75.339, P97:75.92, P99:77.016, P999:78.896},
    305: { L:1, M:71.5088, S:0.03453, P01:63.878, P1:65.765, P3:66.865, P5:67.447, P10:68.344, P15:68.95, P25:69.843, P50:71.509, P75:73.174, P85:74.068, P90:74.673, P95:75.57, P97:76.153, P99:77.253, P999:79.139},
    310: { L:1, M:71.7236, S:0.03454, P01:64.068, P1:65.96, P3:67.064, P5:67.649, P10:68.549, P15:69.156, P25:70.053, P50:71.724, P75:73.395, P85:74.291, P90:74.898, P95:75.798, P97:76.383, P99:77.487, P999:79.379},
    315: { L:1, M:71.9372, S:0.03456, P01:64.254, P1:66.154, P3:67.261, P5:67.848, P10:68.751, P15:69.36, P25:70.26, P50:71.937, P75:73.614, P85:74.514, P90:75.123, P95:76.027, P97:76.613, P99:77.721, P999:79.62},
    320: { L:1, M:72.1495, S:0.03458, P01:64.44, P1:66.345, P3:67.457, P5:68.046, P10:68.952, P15:69.564, P25:70.467, P50:72.15, P75:73.832, P85:74.735, P90:75.347, P95:76.253, P97:76.842, P99:77.954, P999:79.859},
    325: { L:1, M:72.3605, S:0.0346, P01:64.624, P1:66.536, P3:67.652, P5:68.242, P10:69.152, P15:69.766, P25:70.672, P50:72.361, P75:74.049, P85:74.955, P90:75.569, P95:76.479, P97:77.069, P99:78.185, P999:80.097},
    330: { L:1, M:72.5702, S:0.03462, P01:64.806, P1:66.726, P3:67.845, P5:68.438, P10:69.35, P15:69.966, P25:70.876, P50:72.57, P75:74.265, P85:75.174, P90:75.79, P95:76.703, P97:77.295, P99:78.415, P999:80.334},
    335: { L:1, M:72.7788, S:0.03464, P01:64.988, P1:66.914, P3:68.037, P5:68.632, P10:69.548, P15:70.166, P25:71.078, P50:72.779, P75:74.479, P85:75.392, P90:76.01, P95:76.926, P97:77.52, P99:78.644, P999:80.569},
    340: { L:1, M:72.9861, S:0.03467, P01:65.166, P1:67.099, P3:68.227, P5:68.824, P10:69.743, P15:70.363, P25:71.279, P50:72.986, P75:74.693, P85:75.609, P90:76.229, P95:77.148, P97:77.745, P99:78.873, P999:80.806},
    345: { L:1, M:73.1922, S:0.03469, P01:65.346, P1:67.286, P3:68.417, P5:69.016, P10:69.938, P15:70.561, P25:71.48, P50:73.192, P75:74.905, P85:75.824, P90:76.446, P95:77.369, P97:77.968, P99:79.099, P999:81.038},
    350: { L:1, M:73.3971, S:0.03471, P01:65.524, P1:67.47, P3:68.606, P5:69.207, P10:70.132, P15:70.757, P25:71.679, P50:73.397, P75:75.115, P85:76.038, P90:76.662, P95:77.588, P97:78.189, P99:79.324, P999:81.27},
    355: { L:1, M:73.6008, S:0.03474, P01:65.699, P1:67.653, P3:68.792, P5:69.395, P10:70.324, P15:70.951, P25:71.876, P50:73.601, P75:75.325, P85:76.251, P90:76.878, P95:77.807, P97:78.41, P99:79.549, P999:81.502},
    360: { L:1, M:73.8034, S:0.03476, P01:65.876, P1:67.835, P3:68.978, P5:69.584, P10:70.516, P15:71.145, P25:72.073, P50:73.803, P75:75.534, P85:76.462, P90:77.091, P95:78.023, P97:78.628, P99:79.771, P999:81.731},
    365: { L:1, M:74.0049, S:0.03479, P01:66.049, P1:68.015, P3:69.163, P5:69.77, P10:70.705, P15:71.336, P25:72.268, P50:74.005, P75:75.741, P85:76.673, P90:77.304, P95:78.24, P97:78.847, P99:79.994, P999:81.961},
    370: { L:1, M:74.2053, S:0.03482, P01:66.221, P1:68.194, P3:69.346, P5:69.955, P10:70.894, P15:71.527, P25:72.463, P50:74.205, P75:75.948, P85:76.883, P90:77.517, P95:78.455, P97:79.065, P99:80.216, P999:82.19},
    375: { L:1, M:74.4045, S:0.03484, P01:66.394, P1:68.374, P3:69.529, P5:70.141, P10:71.082, P15:71.718, P25:72.656, P50:74.405, P75:76.153, P85:77.091, P90:77.727, P95:78.668, P97:79.28, P99:80.435, P999:82.415},
    380: { L:1, M:74.6027, S:0.03487, P01:66.564, P1:68.551, P3:69.71, P5:70.324, P10:71.269, P15:71.907, P25:72.848, P50:74.603, P75:76.357, P85:77.299, P90:77.937, P95:78.882, P97:79.495, P99:80.654, P999:82.642},
    385: { L:1, M:74.7998, S:0.0349, P01:66.733, P1:68.727, P3:69.89, P5:70.506, P10:71.454, P15:72.094, P25:73.039, P50:74.8, P75:76.561, P85:77.505, P90:78.145, P95:79.094, P97:79.71, P99:80.873, P999:82.867},
    390: { L:1, M:74.9959, S:0.03493, P01:66.901, P1:68.902, P3:70.069, P5:70.687, P10:71.639, P15:72.281, P25:73.229, P50:74.996, P75:76.763, P85:77.711, P90:78.353, P95:79.305, P97:79.923, P99:81.09, P999:83.091},
    395: { L:1, M:75.1908, S:0.03495, P01:67.07, P1:69.077, P3:70.248, P5:70.868, P10:71.823, P15:72.467, P25:73.418, P50:75.191, P75:76.963, P85:77.914, P90:78.559, P95:79.513, P97:80.133, P99:81.304, P999:83.312},
    400: { L:1, M:75.3848, S:0.03498, P01:67.236, P1:69.25, P3:70.425, P5:71.047, P10:72.005, P15:72.652, P25:73.606, P50:75.385, P75:77.163, P85:78.118, P90:78.764, P95:79.722, P97:80.344, P99:81.519, P999:83.534},
    405: { L:1, M:75.5777, S:0.03501, P01:67.401, P1:69.422, P3:70.601, P5:71.225, P10:72.187, P15:72.835, P25:73.793, P50:75.578, P75:77.362, P85:78.32, P90:78.969, P95:79.93, P97:80.554, P99:81.733, P999:83.754},
    410: { L:1, M:75.7696, S:0.03504, P01:67.565, P1:69.593, P3:70.776, P5:71.403, P10:72.367, P15:73.018, P25:73.979, P50:75.77, P75:77.56, P85:78.521, P90:79.172, P95:80.137, P97:80.763, P99:81.946, P999:83.974},
    415: { L:1, M:75.9605, S:0.03507, P01:67.728, P1:69.763, P3:70.95, P5:71.579, P10:72.547, P15:73.2, P25:74.164, P50:75.961, P75:77.757, P85:78.721, P90:79.374, P95:80.342, P97:80.971, P99:82.158, P999:84.193},
    420: { L:1, M:76.1504, S:0.03511, P01:67.888, P1:69.931, P3:71.122, P5:71.753, P10:72.724, P15:73.379, P25:74.347, P50:76.15, P75:77.954, P85:78.921, P90:79.577, P95:80.548, P97:81.179, P99:82.37, P999:84.413},
    425: { L:1, M:76.3393, S:0.03514, P01:68.05, P1:70.099, P3:71.294, P5:71.927, P10:72.901, P15:73.559, P25:74.53, P50:76.339, P75:78.149, P85:79.12, P90:79.777, P95:80.752, P97:81.385, P99:82.58, P999:84.629},
    430: { L:1, M:76.5272, S:0.03517, P01:68.21, P1:70.266, P3:71.465, P5:72.1, P10:73.078, P15:73.738, P25:74.712, P50:76.527, P75:78.343, P85:79.317, P90:79.976, P95:80.954, P97:81.589, P99:82.788, P999:84.844},
    435: { L:1, M:76.7142, S:0.0352, P01:68.37, P1:70.432, P3:71.635, P5:72.273, P10:73.254, P15:73.915, P25:74.893, P50:76.714, P75:78.536, P85:79.513, P90:80.175, P95:81.156, P97:81.793, P99:82.996, P999:85.059},
    440: { L:1, M:76.9002, S:0.03523, P01:68.528, P1:70.598, P3:71.805, P5:72.444, P10:73.428, P15:74.092, P25:75.073, P50:76.9, P75:78.728, P85:79.708, P90:80.372, P95:81.356, P97:81.996, P99:83.203, P999:85.272},
    445: { L:1, M:77.0853, S:0.03527, P01:68.684, P1:70.76, P3:71.972, P5:72.613, P10:73.601, P15:74.267, P25:75.251, P50:77.085, P75:78.919, P85:79.903, P90:80.57, P95:81.557, P97:82.199, P99:83.41, P999:85.487},
    450: { L:1, M:77.2695, S:0.0353, P01:68.841, P1:70.924, P3:72.139, P5:72.783, P10:73.774, P15:74.443, P25:75.43, P50:77.27, P75:79.109, P85:80.096, P90:80.765, P95:81.756, P97:82.4, P99:83.615, P999:85.698},
    455: { L:1, M:77.4528, S:0.03533, P01:68.997, P1:71.087, P3:72.306, P5:72.952, P10:73.946, P15:74.617, P25:75.607, P50:77.453, P75:79.298, P85:80.289, P90:80.96, P95:81.954, P97:82.599, P99:83.819, P999:85.909},
    460: { L:1, M:77.6352, S:0.03536, P01:69.152, P1:71.249, P3:72.472, P5:73.12, P10:74.117, P15:74.79, P25:75.784, P50:77.635, P75:79.487, P85:80.48, P90:81.153, P95:82.151, P97:82.798, P99:84.021, P999:86.118},
    465: { L:1, M:77.8167, S:0.0354, P01:69.304, P1:71.408, P3:72.636, P5:73.286, P10:74.286, P15:74.962, P25:75.959, P50:77.817, P75:79.675, P85:80.672, P90:81.347, P95:82.348, P97:82.998, P99:84.225, P999:86.329},
    470: { L:1, M:77.9974, S:0.03543, P01:69.458, P1:71.569, P3:72.8, P5:73.452, P10:74.456, P15:75.133, P25:76.133, P50:77.997, P75:79.861, P85:80.862, P90:81.539, P95:82.543, P97:83.195, P99:84.426, P999:86.537},
    475: { L:1, M:78.1772, S:0.03547, P01:69.608, P1:71.726, P3:72.962, P5:73.616, P10:74.624, P15:75.303, P25:76.307, P50:78.177, P75:80.048, P85:81.051, P90:81.731, P95:82.738, P97:83.393, P99:84.628, P999:86.746},
    480: { L:1, M:78.3563, S:0.0355, P01:69.76, P1:71.885, P3:73.125, P5:73.781, P10:74.791, P15:75.473, P25:76.48, P50:78.356, P75:80.232, P85:81.239, P90:81.921, P95:82.932, P97:83.588, P99:84.827, P999:86.952},
    485: { L:1, M:78.5345, S:0.03553, P01:69.912, P1:72.043, P3:73.286, P5:73.945, P10:74.959, P15:75.643, P25:76.652, P50:78.535, P75:80.417, P85:81.426, P90:82.11, P95:83.124, P97:83.783, P99:85.026, P999:87.157},
    490: { L:1, M:78.7118, S:0.03557, P01:70.06, P1:72.199, P3:73.446, P5:74.107, P10:75.124, P15:75.81, P25:76.823, P50:78.712, P75:80.6, P85:81.614, P90:82.3, P95:83.317, P97:83.978, P99:85.225, P999:87.364},
    495: { L:1, M:78.8884, S:0.0356, P01:70.21, P1:72.355, P3:73.606, P5:74.269, P10:75.289, P15:75.978, P25:76.994, P50:78.888, P75:80.783, P85:81.799, P90:82.488, P95:83.508, P97:84.17, P99:85.422, P999:87.567},
    500: { L:1, M:79.0642, S:0.03564, P01:70.356, P1:72.509, P3:73.764, P5:74.429, P10:75.453, P15:76.144, P25:77.164, P50:79.064, P75:80.965, P85:81.985, P90:82.675, P95:83.699, P97:84.364, P99:85.619, P999:87.772},
    505: { L:1, M:79.2392, S:0.03567, P01:70.505, P1:72.664, P3:73.923, P5:74.59, P10:75.617, P15:76.31, P25:77.333, P50:79.239, P75:81.146, P85:82.169, P90:82.861, P95:83.888, P97:84.555, P99:85.815, P999:87.974},
    510: { L:1, M:79.4134, S:0.03571, P01:70.65, P1:72.816, P3:74.08, P5:74.749, P10:75.779, P15:76.474, P25:77.501, P50:79.413, P75:81.326, P85:82.353, P90:83.048, P95:84.078, P97:84.747, P99:86.011, P999:88.177},
    515: { L:1, M:79.5868, S:0.03574, P01:70.797, P1:72.97, P3:74.237, P5:74.908, P10:75.942, P15:76.639, P25:77.668, P50:79.587, P75:81.505, P85:82.535, P90:83.232, P95:84.265, P97:84.937, P99:86.204, P999:88.377},
    520: { L:1, M:79.7594, S:0.03578, P01:70.941, P1:73.12, P3:74.392, P5:75.065, P10:76.102, P15:76.802, P25:77.835, P50:79.759, P75:81.684, P85:82.717, P90:83.417, P95:84.453, P97:85.127, P99:86.398, P999:88.578},
    525: { L:1, M:79.9312, S:0.03582, P01:71.083, P1:73.271, P3:74.546, P5:75.222, P10:76.262, P15:76.964, P25:78, P50:79.931, P75:81.862, P85:82.899, P90:83.6, P95:84.641, P97:85.316, P99:86.592, P999:88.779},
    530: { L:1, M:80.1023, S:0.03585, P01:71.228, P1:73.422, P3:74.701, P5:75.379, P10:76.422, P15:77.126, P25:78.165, P50:80.102, P75:82.039, P85:83.079, P90:83.782, P95:84.826, P97:85.503, P99:86.783, P999:88.976},
    535: { L:1, M:80.2727, S:0.03589, P01:71.37, P1:73.571, P3:74.854, P5:75.534, P10:76.581, P15:77.287, P25:78.33, P50:80.273, P75:82.216, P85:83.259, P90:83.965, P95:85.012, P97:85.691, P99:86.975, P999:89.176},
    540: { L:1, M:80.4423, S:0.03592, P01:71.513, P1:73.72, P3:75.008, P5:75.69, P10:76.739, P15:77.448, P25:78.493, P50:80.442, P75:82.391, P85:83.437, P90:84.145, P95:85.195, P97:85.877, P99:87.164, P999:89.371},
    545: { L:1, M:80.6112, S:0.03596, P01:71.653, P1:73.868, P3:75.159, P5:75.843, P10:76.896, P15:77.607, P25:78.656, P50:80.611, P75:82.566, P85:83.616, P90:84.326, P95:85.379, P97:86.063, P99:87.355, P999:89.569},
    550: { L:1, M:80.7793, S:0.036, P01:71.793, P1:74.014, P3:75.31, P5:75.996, P10:77.052, P15:77.765, P25:78.818, P50:80.779, P75:82.741, P85:83.793, P90:84.506, P95:85.563, P97:86.249, P99:87.544, P999:89.766},
    555: { L:1, M:80.9467, S:0.03603, P01:71.934, P1:74.162, P3:75.461, P5:76.149, P10:77.209, P15:77.924, P25:78.98, P50:80.947, P75:82.914, P85:83.969, P90:84.684, P95:85.744, P97:86.432, P99:87.732, P999:89.959},
    560: { L:1, M:81.1134, S:0.03607, P01:72.072, P1:74.307, P3:75.611, P5:76.301, P10:77.364, P15:78.081, P25:79.14, P50:81.113, P75:83.087, P85:84.146, P90:84.863, P95:85.926, P97:86.616, P99:87.92, P999:90.155},
    565: { L:1, M:81.2795, S:0.03611, P01:72.21, P1:74.452, P3:75.759, P5:76.452, P10:77.518, P15:78.238, P25:79.3, P50:81.28, P75:83.259, P85:84.321, P90:85.041, P95:86.107, P97:86.8, P99:88.107, P999:90.349},
    570: { L:1, M:81.4448, S:0.03614, P01:72.349, P1:74.597, P3:75.909, P5:76.603, P10:77.673, P15:78.394, P25:79.459, P50:81.445, P75:83.43, P85:84.495, P90:85.217, P95:86.286, P97:86.981, P99:88.292, P999:90.541},
    575: { L:1, M:81.6095, S:0.03618, P01:72.485, P1:74.741, P3:76.056, P5:76.753, P10:77.826, P15:78.549, P25:79.618, P50:81.61, P75:83.601, P85:84.67, P90:85.393, P95:86.466, P97:87.163, P99:88.478, P999:90.734},
    580: { L:1, M:81.7735, S:0.03622, P01:72.621, P1:74.883, P3:76.203, P5:76.902, P10:77.978, P15:78.704, P25:79.776, P50:81.774, P75:83.771, P85:84.843, P90:85.569, P95:86.645, P97:87.344, P99:88.664, P999:90.926},
    585: { L:1, M:81.9368, S:0.03625, P01:72.758, P1:75.027, P3:76.35, P5:77.051, P10:78.13, P15:78.858, P25:79.933, P50:81.937, P75:83.94, P85:85.015, P90:85.743, P95:86.822, P97:87.523, P99:88.847, P999:91.115},
    590: { L:1, M:82.0994, S:0.03629, P01:72.892, P1:75.168, P3:76.496, P5:77.199, P10:78.281, P15:79.011, P25:80.09, P50:82.099, P75:84.109, P85:85.187, P90:85.918, P95:87, P97:87.703, P99:89.03, P999:91.306},
    595: { L:1, M:82.2614, S:0.03633, P01:73.026, P1:75.309, P3:76.641, P5:77.346, P10:78.431, P15:79.164, P25:80.246, P50:82.261, P75:84.277, P85:85.359, P90:86.091, P95:87.177, P97:87.882, P99:89.214, P999:91.497},
    600: { L:1, M:82.4228, S:0.03636, P01:73.162, P1:75.451, P3:76.786, P5:77.493, P10:78.582, P15:79.317, P25:80.401, P50:82.423, P75:84.444, P85:85.529, P90:86.263, P95:87.352, P97:88.059, P99:89.395, P999:91.684},
    605: { L:1, M:82.5835, S:0.0364, P01:73.294, P1:75.59, P3:76.93, P5:77.639, P10:78.731, P15:79.468, P25:80.556, P50:82.584, P75:84.611, P85:85.699, P90:86.436, P95:87.528, P97:88.237, P99:89.577, P999:91.873},
    610: { L:1, M:82.7436, S:0.03644, P01:73.426, P1:75.729, P3:77.073, P5:77.784, P10:78.879, P15:79.619, P25:80.71, P50:82.744, P75:84.777, P85:85.869, P90:86.608, P95:87.703, P97:88.415, P99:89.758, P999:92.061},
    615: { L:1, M:82.903, S:0.03648, P01:73.557, P1:75.867, P3:77.215, P5:77.928, P10:79.027, P15:79.769, P25:80.863, P50:82.903, P75:84.943, P85:86.037, P90:86.779, P95:87.878, P97:88.591, P99:89.939, P999:92.249},
    620: { L:1, M:83.0618, S:0.03651, P01:73.69, P1:76.007, P3:77.358, P5:78.074, P10:79.175, P15:79.919, P25:81.016, P50:83.062, P75:85.107, P85:86.205, P90:86.948, P95:88.05, P97:88.765, P99:90.117, P999:92.433},
    625: { L:1, M:83.22, S:0.03655, P01:73.82, P1:76.144, P3:77.499, P5:78.217, P10:79.322, P15:80.067, P25:81.168, P50:83.22, P75:85.272, P85:86.373, P90:87.118, P95:88.223, P97:88.941, P99:90.296, P999:92.62},
    630: { L:1, M:83.3775, S:0.03659, P01:73.95, P1:76.28, P3:77.64, P5:78.359, P10:79.468, P15:80.216, P25:81.32, P50:83.378, P75:85.435, P85:86.539, P90:87.287, P95:88.396, P97:89.115, P99:90.475, P999:92.805},
    635: { L:1, M:83.5344, S:0.03662, P01:74.081, P1:76.418, P3:77.781, P5:78.503, P10:79.614, P15:80.364, P25:81.471, P50:83.534, P75:85.598, P85:86.705, P90:87.455, P95:88.566, P97:89.288, P99:90.651, P999:92.988},
    640: { L:1, M:83.6907, S:0.03666, P01:74.21, P1:76.553, P3:77.92, P5:78.644, P10:79.759, P15:80.511, P25:81.621, P50:83.691, P75:85.76, P85:86.871, P90:87.623, P95:88.737, P97:89.461, P99:90.828, P999:93.172},
    645: { L:1, M:83.8464, S:0.0367, P01:74.337, P1:76.688, P3:78.059, P5:78.785, P10:79.903, P15:80.657, P25:81.771, P50:83.846, P75:85.922, P85:87.036, P90:87.79, P95:88.908, P97:89.634, P99:91.005, P999:93.356},
    650: { L:1, M:84.0014, S:0.03674, P01:74.464, P1:76.822, P3:78.197, P5:78.925, P10:80.046, P15:80.803, P25:81.92, P50:84.001, P75:86.083, P85:87.2, P90:87.957, P95:89.078, P97:89.806, P99:91.181, P999:93.539},
    655: { L:1, M:84.1558, S:0.03677, P01:74.593, P1:76.957, P3:78.336, P5:79.066, P10:80.19, P15:80.949, P25:82.069, P50:84.156, P75:86.243, P85:87.363, P90:88.121, P95:89.246, P97:89.976, P99:91.354, P999:93.718},
    660: { L:1, M:84.3096, S:0.03681, P01:74.719, P1:77.09, P3:78.473, P5:79.205, P10:80.332, P15:81.093, P25:82.216, P50:84.31, P75:86.403, P85:87.526, P90:88.287, P95:89.414, P97:90.147, P99:91.529, P999:93.9},
    665: { L:1, M:84.4628, S:0.03685, P01:74.845, P1:77.222, P3:78.609, P5:79.343, P10:80.474, P15:81.237, P25:82.363, P50:84.463, P75:86.562, P85:87.689, P90:88.452, P95:89.582, P97:90.317, P99:91.703, P999:94.081},
    670: { L:1, M:84.6154, S:0.03689, P01:74.969, P1:77.354, P3:78.745, P5:79.481, P10:80.615, P15:81.38, P25:82.51, P50:84.615, P75:86.721, P85:87.851, P90:88.616, P95:89.75, P97:90.486, P99:91.877, P999:94.261},
    675: { L:1, M:84.7674, S:0.03692, P01:75.096, P1:77.487, P3:78.881, P5:79.62, P10:80.757, P15:81.524, P25:82.657, P50:84.767, P75:86.878, P85:88.011, P90:88.778, P95:89.915, P97:90.654, P99:92.048, P999:94.439},
    680: { L:1, M:84.9188, S:0.03696, P01:75.22, P1:77.617, P3:79.016, P5:79.756, P10:80.897, P15:81.666, P25:82.802, P50:84.919, P75:87.036, P85:88.172, P90:88.941, P95:90.081, P97:90.822, P99:92.22, P999:94.618},
    685: { L:1, M:85.0695, S:0.037, P01:75.343, P1:77.747, P3:79.15, P5:79.892, P10:81.036, P15:81.807, P25:82.946, P50:85.07, P75:87.193, P85:88.332, P90:89.103, P95:90.247, P97:90.989, P99:92.392, P999:94.796},
    690: { L:1, M:85.2197, S:0.03704, P01:75.465, P1:77.876, P3:79.283, P5:80.028, P10:81.174, P15:81.948, P25:83.091, P50:85.22, P75:87.349, P85:88.491, P90:89.265, P95:90.412, P97:91.156, P99:92.563, P999:94.974},
    695: { L:1, M:85.3693, S:0.03707, P01:75.59, P1:78.007, P3:79.417, P5:80.164, P10:81.314, P15:82.089, P25:83.235, P50:85.369, P75:87.504, P85:88.649, P90:89.425, P95:90.575, P97:91.321, P99:92.731, P999:95.149},
    700: { L:1, M:85.5184, S:0.03711, P01:75.711, P1:78.136, P3:79.55, P5:80.298, P10:81.451, P15:82.229, P25:83.378, P50:85.518, P75:87.659, P85:88.808, P90:89.586, P95:90.738, P97:91.487, P99:92.901, P999:95.326},
    705: { L:1, M:85.6668, S:0.03715, P01:75.832, P1:78.263, P3:79.681, P5:80.432, P10:81.588, P15:82.368, P25:83.52, P50:85.667, P75:87.813, P85:88.965, P90:89.745, P95:90.902, P97:91.652, P99:93.07, P999:95.502},
    710: { L:1, M:85.8147, S:0.03718, P01:75.955, P1:78.392, P3:79.814, P5:80.567, P10:81.726, P15:82.508, P25:83.663, P50:85.815, P75:87.967, P85:89.122, P90:89.904, P95:91.063, P97:91.816, P99:93.237, P999:95.674},
    715: { L:1, M:85.9621, S:0.03722, P01:76.075, P1:78.519, P3:79.944, P5:80.699, P10:81.862, P15:82.646, P25:83.804, P50:85.962, P75:88.12, P85:89.278, P90:90.062, P95:91.225, P97:91.98, P99:93.405, P999:95.849},
    720: { L:1, M:86.1089, S:0.03726, P01:76.194, P1:78.645, P3:80.075, P5:80.832, P10:81.997, P15:82.784, P25:83.945, P50:86.109, P75:88.273, P85:89.434, P90:90.221, P95:91.386, P97:92.143, P99:93.573, P999:96.024},
    725: { L:1, M:86.2551, S:0.03729, P01:76.316, P1:78.773, P3:80.206, P5:80.965, P10:82.133, P15:82.921, P25:84.086, P50:86.255, P75:88.425, P85:89.589, P90:90.377, P95:91.546, P97:92.305, P99:93.738, P999:96.195},
    726: { L:1, M:86.2843, S:0.0373, P01:76.339, P1:78.797, P3:80.231, P5:80.99, P10:82.16, P15:82.949, P25:84.114, P50:86.284, P75:88.455, P85:89.62, P90:90.409, P95:91.578, P97:92.337, P99:93.771, P999:96.23},
};

export default lhfaGirls;