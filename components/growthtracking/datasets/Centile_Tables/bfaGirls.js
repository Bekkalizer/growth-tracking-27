const bfaGirls = {
    0: { L:-0.0631, M:13.3363, S:0.09272, P01:10.039, P1:10.764, P3:11.213, P5:11.458, P10:11.847, P15:12.118, P25:12.529, P50:13.336, P75:14.199, P85:14.686, P90:15.026, P95:15.545, P97:15.892, P99:16.571, P999:17.808},
    5: { L:0.4333, M:13.247, S:0.09711, P01:9.605, P1:10.444, P3:10.952, P5:11.226, P10:11.656, P15:11.952, P25:12.395, P50:13.247, P75:14.131, P85:14.618, P90:14.954, P95:15.459, P97:15.793, P99:16.433, P999:17.565},
    10: { L:0.5789, M:13.3137, S:0.09824, P01:9.535, P1:10.419, P3:10.95, P5:11.236, P10:11.682, P15:11.987, P25:12.444, P50:13.314, P75:14.208, P85:14.698, P90:15.034, P95:15.538, P97:15.868, P99:16.501, P999:17.61},
    15: { L:0.4947, M:13.5169, S:0.09726, P01:9.762, P1:10.633, P3:11.159, P5:11.442, P10:11.885, P15:12.189, P25:12.645, P50:13.517, P75:14.418, P85:14.914, P90:15.255, P95:15.767, P97:16.104, P99:16.75, P999:17.888},
    20: { L:0.4365, M:13.8784, S:0.09659, P01:10.08, P1:10.955, P3:11.485, P5:11.771, P10:12.22, P15:12.528, P25:12.991, P50:13.878, P75:14.799, P85:15.307, P90:15.657, P95:16.183, P97:16.53, P99:17.196, P999:18.374},
    25: { L:0.3888, M:14.2276, S:0.09605, P01:10.379, P1:11.262, P3:11.797, P5:12.087, P10:12.542, P15:12.854, P25:13.324, P50:14.228, P75:15.168, P85:15.687, P90:16.045, P95:16.585, P97:16.942, P99:17.627, P999:18.842},
    30: { L:0.3481, M:14.5422, S:0.09559, P01:10.648, P1:11.537, P3:12.078, P5:12.371, P10:12.831, P15:13.148, P25:13.624, P50:14.542, P75:15.5, P85:16.03, P90:16.396, P95:16.948, P97:17.313, P99:18.016, P999:19.264},
    35: { L:0.3124, M:14.8157, S:0.0952, P01:10.882, P1:11.777, P3:12.323, P5:12.618, P10:13.083, P15:13.403, P25:13.885, P50:14.816, P75:15.788, P85:16.328, P90:16.7, P95:17.263, P97:17.635, P99:18.354, P999:19.631},
    40: { L:0.2806, M:15.052, S:0.09485, P01:11.086, P1:11.986, P3:12.535, P5:12.832, P10:13.301, P15:13.624, P25:14.111, P50:15.052, P75:16.037, P85:16.585, P90:16.963, P95:17.535, P97:17.914, P99:18.645, P999:19.949},
    45: { L:0.2519, M:15.2591, S:0.09454, P01:11.265, P1:12.169, P3:12.721, P5:13.021, P10:13.492, P15:13.818, P25:14.309, P50:15.259, P75:16.256, P85:16.81, P90:17.193, P95:17.774, P97:18.158, P99:18.901, P999:20.228},
    50: { L:0.2255, M:15.4408, S:0.09425, P01:11.424, P1:12.331, P3:12.886, P5:13.187, P10:13.661, P15:13.989, P25:14.483, P50:15.441, P75:16.447, P85:17.007, P90:17.395, P95:17.982, P97:18.372, P99:19.126, P999:20.473},
    55: { L:0.2012, M:15.6012, S:0.09399, P01:11.566, P1:12.475, P3:13.031, P5:13.334, P10:13.81, P15:14.139, P25:14.637, P50:15.601, P75:16.616, P85:17.181, P90:17.573, P95:18.167, P97:18.561, P99:19.324, P999:20.69},
    60: { L:0.1787, M:15.7444, S:0.09375, P01:11.693, P1:12.604, P3:13.162, P5:13.465, P10:13.944, P15:14.274, P25:14.774, P50:15.744, P75:16.766, P85:17.337, P90:17.732, P95:18.331, P97:18.729, P99:19.5, P999:20.883},
    65: { L:0.1575, M:15.8729, S:0.09353, P01:11.808, P1:12.72, P3:13.279, P5:13.584, P10:14.064, P15:14.396, P25:14.898, P50:15.873, P75:16.901, P85:17.476, P90:17.874, P95:18.479, P97:18.881, P99:19.659, P999:21.058},
    70: { L:0.1377, M:15.9874, S:0.09332, P01:11.912, P1:12.825, P3:13.385, P5:13.69, P10:14.171, P15:14.504, P25:15.008, P50:15.987, P75:17.021, P85:17.6, P90:18.001, P95:18.61, P97:19.015, P99:19.801, P999:21.213},
    75: { L:0.119, M:16.0897, S:0.09312, P01:12.006, P1:12.919, P3:13.48, P5:13.785, P10:14.268, P15:14.601, P25:15.107, P50:16.09, P75:17.129, P85:17.71, P90:18.114, P95:18.727, P97:19.135, P99:19.927, P999:21.352},
    80: { L:0.1013, M:16.1817, S:0.09293, P01:12.091, P1:13.004, P3:13.566, P5:13.871, P10:14.354, P15:14.689, P25:15.196, P50:16.182, P75:17.225, P85:17.809, P90:18.215, P95:18.832, P97:19.243, P99:20.04, P999:21.476},
    85: { L:0.0844, M:16.2644, S:0.09275, P01:12.168, P1:13.082, P3:13.643, P5:13.949, P10:14.433, P15:14.768, P25:15.276, P50:16.264, P75:17.312, P85:17.899, P90:18.306, P95:18.927, P97:19.34, P99:20.142, P999:21.589},
    90: { L:0.0684, M:16.339, S:0.09258, P01:12.239, P1:13.152, P3:13.714, P5:14.02, P10:14.504, P15:14.839, P25:15.348, P50:16.339, P75:17.389, P85:17.979, P90:18.388, P95:19.012, P97:19.427, P99:20.234, P999:21.691},
    95: { L:0.053, M:16.4065, S:0.09242, P01:12.304, P1:13.216, P3:13.778, P5:14.084, P10:14.569, P15:14.904, P25:15.413, P50:16.407, P75:17.46, P85:18.051, P90:18.463, P95:19.088, P97:19.506, P99:20.317, P999:21.783},
    100: { L:0.0384, M:16.4673, S:0.09227, P01:12.363, P1:13.274, P3:13.836, P5:14.142, P10:14.627, P15:14.963, P25:15.473, P50:16.467, P75:17.523, P85:18.117, P90:18.529, P95:19.158, P97:19.577, P99:20.392, P999:21.867},
    105: { L:0.0243, M:16.5222, S:0.09212, P01:12.417, P1:13.328, P3:13.889, P5:14.195, P10:14.68, P15:15.016, P25:15.526, P50:16.522, P75:17.581, P85:18.175, P90:18.589, P95:19.22, P97:19.641, P99:20.46, P999:21.942},
    110: { L:0.0107, M:16.5717, S:0.09198, P01:12.466, P1:13.376, P3:13.937, P5:14.243, P10:14.728, P15:15.064, P25:15.575, P50:16.572, P75:17.632, P85:18.228, P90:18.644, P95:19.276, P97:19.698, P99:20.521, P999:22.01},
    115: { L:-0.0023, M:16.6164, S:0.09184, P01:12.512, P1:13.421, P3:13.981, P5:14.287, P10:14.772, P15:15.108, P25:15.618, P50:16.616, P75:17.678, P85:18.276, P90:18.692, P95:19.327, P97:19.75, P99:20.575, P999:22.072},
    120: { L:-0.0148, M:16.657, S:0.09171, P01:12.554, P1:13.461, P3:14.021, P5:14.327, P10:14.811, P15:15.148, P25:15.658, P50:16.657, P75:17.72, P85:18.319, P90:18.736, P95:19.372, P97:19.797, P99:20.625, P999:22.128},
    125: { L:-0.027, M:16.6939, S:0.09158, P01:12.593, P1:13.499, P3:14.058, P5:14.364, P10:14.848, P15:15.184, P25:15.695, P50:16.694, P75:17.759, P85:18.358, P90:18.776, P95:19.414, P97:19.84, P99:20.67, P999:22.179},
    130: { L:-0.0387, M:16.7274, S:0.09146, P01:12.628, P1:13.533, P3:14.092, P5:14.397, P10:14.881, P15:15.217, P25:15.728, P50:16.727, P75:17.793, P85:18.394, P90:18.813, P95:19.452, P97:19.879, P99:20.712, P999:22.225},
    135: { L:-0.05, M:16.7577, S:0.09134, P01:12.662, P1:13.565, P3:14.123, P5:14.428, P10:14.912, P15:15.247, P25:15.758, P50:16.758, P75:17.824, P85:18.426, P90:18.845, P95:19.485, P97:19.913, P99:20.749, P999:22.268},
    140: { L:-0.061, M:16.7848, S:0.09122, P01:12.692, P1:13.594, P3:14.151, P5:14.456, P10:14.939, P15:15.275, P25:15.785, P50:16.785, P75:17.852, P85:18.454, P90:18.874, P95:19.515, P97:19.944, P99:20.782, P999:22.305},
    145: { L:-0.0717, M:16.809, S:0.09111, P01:12.72, P1:13.62, P3:14.177, P5:14.481, P10:14.964, P15:15.299, P25:15.809, P50:16.809, P75:17.877, P85:18.48, P90:18.9, P95:19.542, P97:19.972, P99:20.811, P999:22.339},
    150: { L:-0.082, M:16.8302, S:0.091, P01:12.745, P1:13.644, P3:14.2, P5:14.504, P10:14.986, P15:15.321, P25:15.831, P50:16.83, P75:17.898, P85:18.502, P90:18.923, P95:19.566, P97:19.996, P99:20.837, P999:22.369},
    155: { L:-0.092, M:16.8487, S:0.0909, P01:12.768, P1:13.665, P3:14.22, P5:14.524, P10:15.005, P15:15.34, P25:15.849, P50:16.849, P75:17.917, P85:18.521, P90:18.942, P95:19.586, P97:20.017, P99:20.86, P999:22.396},
    160: { L:-0.1018, M:16.8648, S:0.09079, P01:12.789, P1:13.684, P3:14.238, P5:14.542, P10:15.023, P15:15.357, P25:15.866, P50:16.865, P75:17.933, P85:18.537, P90:18.959, P95:19.604, P97:20.035, P99:20.879, P999:22.418},
    165: { L:-0.1113, M:16.8784, S:0.09069, P01:12.808, P1:13.701, P3:14.254, P5:14.557, P10:15.038, P15:15.372, P25:15.88, P50:16.878, P75:17.947, P85:18.551, P90:18.973, P95:19.618, P97:20.05, P99:20.895, P999:22.438},
    170: { L:-0.1206, M:16.8897, S:0.09059, P01:12.825, P1:13.716, P3:14.268, P5:14.571, P10:15.051, P15:15.384, P25:15.892, P50:16.89, P75:17.958, P85:18.562, P90:18.984, P95:19.63, P97:20.063, P99:20.909, P999:22.454},
    175: { L:-0.1296, M:16.8987, S:0.0905, P01:12.839, P1:13.729, P3:14.28, P5:14.582, P10:15.061, P15:15.394, P25:15.902, P50:16.899, P75:17.967, P85:18.571, P90:18.994, P95:19.64, P97:20.073, P99:20.92, P999:22.468},
    180: { L:-0.1384, M:16.9055, S:0.09041, P01:12.852, P1:13.74, P3:14.29, P5:14.591, P10:15.07, P15:15.403, P25:15.909, P50:16.906, P75:17.973, P85:18.578, P90:19, P95:19.647, P97:20.08, P99:20.928, P999:22.479},
    185: { L:-0.147, M:16.9102, S:0.09032, P01:12.863, P1:13.749, P3:14.298, P5:14.599, P10:15.077, P15:15.409, P25:15.915, P50:16.91, P75:17.977, P85:18.582, P90:19.004, P95:19.651, P97:20.084, P99:20.933, P999:22.486},
    190: { L:-0.1554, M:16.9129, S:0.09023, P01:12.873, P1:13.757, P3:14.304, P5:14.605, P10:15.082, P15:15.413, P25:15.919, P50:16.913, P75:17.979, P85:18.584, P90:19.006, P95:19.653, P97:20.087, P99:20.936, P999:22.491},
    195: { L:-0.1635, M:16.9137, S:0.09014, P01:12.881, P1:13.762, P3:14.309, P5:14.609, P10:15.085, P15:15.416, P25:15.921, P50:16.914, P75:17.979, P85:18.583, P90:19.006, P95:19.653, P97:20.087, P99:20.937, P999:22.493},
    200: { L:-0.1715, M:16.9127, S:0.09006, P01:12.887, P1:13.766, P3:14.312, P5:14.611, P10:15.086, P15:15.417, P25:15.921, P50:16.913, P75:17.978, P85:18.581, P90:19.004, P95:19.651, P97:20.085, P99:20.935, P999:22.494},
    205: { L:-0.1794, M:16.9099, S:0.08997, P01:12.892, P1:13.769, P3:14.313, P5:14.612, P10:15.086, P15:15.416, P25:15.919, P50:16.91, P75:17.974, P85:18.577, P90:18.999, P95:19.646, P97:20.08, P99:20.931, P999:22.491},
    210: { L:-0.187, M:16.9055, S:0.08989, P01:12.895, P1:13.77, P3:14.313, P5:14.611, P10:15.084, P15:15.414, P25:15.916, P50:16.906, P75:17.968, P85:18.571, P90:18.993, P95:19.64, P97:20.074, P99:20.925, P999:22.486},
    215: { L:-0.1945, M:16.8995, S:0.08981, P01:12.897, P1:13.77, P3:14.312, P5:14.609, P10:15.081, P15:15.41, P25:15.912, P50:16.9, P75:17.961, P85:18.564, P90:18.986, P95:19.632, P97:20.066, P99:20.917, P999:22.479},
    220: { L:-0.2018, M:16.8921, S:0.08973, P01:12.898, P1:13.768, P3:14.309, P5:14.606, P10:15.077, P15:15.405, P25:15.906, P50:16.892, P75:17.953, P85:18.555, P90:18.976, P95:19.623, P97:20.056, P99:20.908, P999:22.47},
    225: { L:-0.209, M:16.8834, S:0.08966, P01:12.897, P1:13.766, P3:14.305, P5:14.601, P10:15.071, P15:15.399, P25:15.899, P50:16.883, P75:17.943, P85:18.544, P90:18.966, P95:19.612, P97:20.046, P99:20.897, P999:22.46},
    230: { L:-0.2161, M:16.8733, S:0.08958, P01:12.895, P1:13.762, P3:14.3, P5:14.595, P10:15.064, P15:15.391, P25:15.89, P50:16.873, P75:17.931, P85:18.532, P90:18.953, P95:19.599, P97:20.033, P99:20.884, P999:22.448},
    235: { L:-0.223, M:16.8621, S:0.08951, P01:12.893, P1:13.757, P3:14.293, P5:14.588, P10:15.056, P15:15.383, P25:15.881, P50:16.862, P75:17.919, P85:18.519, P90:18.94, P95:19.585, P97:20.019, P99:20.87, P999:22.434},
    240: { L:-0.2297, M:16.8497, S:0.08944, P01:12.889, P1:13.751, P3:14.286, P5:14.58, P10:15.047, P15:15.373, P25:15.87, P50:16.85, P75:17.905, P85:18.505, P90:18.925, P95:19.57, P97:20.003, P99:20.854, P999:22.419},
    245: { L:-0.2364, M:16.8362, S:0.08937, P01:12.884, P1:13.744, P3:14.278, P5:14.571, P10:15.037, P15:15.362, P25:15.858, P50:16.836, P75:17.89, P85:18.489, P90:18.909, P95:19.553, P97:19.986, P99:20.837, P999:22.402},
    250: { L:-0.2429, M:16.8217, S:0.0893, P01:12.879, P1:13.736, P3:14.268, P5:14.561, P10:15.026, P15:15.35, P25:15.845, P50:16.822, P75:17.874, P85:18.472, P90:18.892, P95:19.536, P97:19.968, P99:20.818, P999:22.383},
    255: { L:-0.2493, M:16.8063, S:0.08923, P01:12.872, P1:13.727, P3:14.258, P5:14.55, P10:15.014, P15:15.338, P25:15.832, P50:16.806, P75:17.857, P85:18.455, P90:18.874, P95:19.517, P97:19.949, P99:20.799, P999:22.364},
    260: { L:-0.2556, M:16.79, S:0.08916, P01:12.865, P1:13.718, P3:14.248, P5:14.539, P10:15.002, P15:15.324, P25:15.817, P50:16.79, P75:17.839, P85:18.436, P90:18.854, P95:19.497, P97:19.929, P99:20.778, P999:22.343},
    265: { L:-0.2617, M:16.773, S:0.08909, P01:12.858, P1:13.707, P3:14.236, P5:14.526, P10:14.988, P15:15.31, P25:15.802, P50:16.773, P75:17.82, P85:18.416, P90:18.834, P95:19.476, P97:19.908, P99:20.756, P999:22.32},
    270: { L:-0.2678, M:16.7551, S:0.08903, P01:12.849, P1:13.696, P3:14.224, P5:14.513, P10:14.974, P15:15.295, P25:15.786, P50:16.755, P75:17.801, P85:18.396, P90:18.814, P95:19.455, P97:19.886, P99:20.734, P999:22.298},
    275: { L:-0.2737, M:16.7367, S:0.08897, P01:12.839, P1:13.685, P3:14.211, P5:14.5, P10:14.959, P15:15.28, P25:15.77, P50:16.737, P75:17.781, P85:18.375, P90:18.792, P95:19.433, P97:19.864, P99:20.711, P999:22.274},
    280: { L:-0.2796, M:16.7176, S:0.0889, P01:12.83, P1:13.673, P3:14.197, P5:14.485, P10:14.944, P15:15.264, P25:15.752, P50:16.718, P75:17.76, P85:18.353, P90:18.77, P95:19.41, P97:19.84, P99:20.687, P999:22.249},
    285: { L:-0.2854, M:16.698, S:0.08884, P01:12.82, P1:13.66, P3:14.183, P5:14.471, P10:14.928, P15:15.247, P25:15.735, P50:16.698, P75:17.738, P85:18.331, P90:18.747, P95:19.386, P97:19.816, P99:20.662, P999:22.224},
    290: { L:-0.291, M:16.6779, S:0.08878, P01:12.809, P1:13.647, P3:14.169, P5:14.455, P10:14.912, P15:15.23, P25:15.717, P50:16.678, P75:17.716, P85:18.308, P90:18.724, P95:19.362, P97:19.792, P99:20.637, P999:22.198},
    295: { L:-0.2966, M:16.6575, S:0.08872, P01:12.798, P1:13.634, P3:14.154, P5:14.44, P10:14.895, P15:15.213, P25:15.698, P50:16.658, P75:17.694, P85:18.285, P90:18.7, P95:19.337, P97:19.767, P99:20.611, P999:22.172},
    300: { L:-0.3021, M:16.6367, S:0.08866, P01:12.786, P1:13.62, P3:14.139, P5:14.424, P10:14.878, P15:15.195, P25:15.679, P50:16.637, P75:17.672, P85:18.262, P90:18.676, P95:19.313, P97:19.741, P99:20.585, P999:22.145},
    305: { L:-0.3075, M:16.6157, S:0.0886, P01:12.775, P1:13.606, P3:14.123, P5:14.408, P10:14.861, P15:15.177, P25:15.66, P50:16.616, P75:17.649, P85:18.238, P90:18.651, P95:19.287, P97:19.716, P99:20.559, P999:22.117},
    310: { L:-0.3128, M:16.5945, S:0.08855, P01:12.763, P1:13.591, P3:14.108, P5:14.392, P10:14.843, P15:15.159, P25:15.641, P50:16.595, P75:17.626, P85:18.214, P90:18.627, P95:19.262, P97:19.69, P99:20.532, P999:22.09},
    315: { L:-0.3181, M:16.5731, S:0.08849, P01:12.751, P1:13.577, P3:14.092, P5:14.375, P10:14.826, P15:15.141, P25:15.622, P50:16.573, P75:17.602, P85:18.19, P90:18.602, P95:19.237, P97:19.664, P99:20.505, P999:22.062},
    320: { L:-0.3232, M:16.5516, S:0.08843, P01:12.738, P1:13.563, P3:14.076, P5:14.359, P10:14.808, P15:15.122, P25:15.602, P50:16.552, P75:17.579, P85:18.165, P90:18.577, P95:19.211, P97:19.637, P99:20.478, P999:22.034},
    325: { L:-0.3283, M:16.53, S:0.08838, P01:12.726, P1:13.548, P3:14.06, P5:14.342, P10:14.79, P15:15.104, P25:15.582, P50:16.53, P75:17.556, P85:18.141, P90:18.552, P95:19.185, P97:19.611, P99:20.451, P999:22.006},
    330: { L:-0.3333, M:16.5083, S:0.08833, P01:12.713, P1:13.533, P3:14.044, P5:14.325, P10:14.772, P15:15.085, P25:15.563, P50:16.508, P75:17.532, P85:18.117, P90:18.527, P95:19.159, P97:19.585, P99:20.424, P999:21.978},
    335: { L:-0.3382, M:16.4867, S:0.08827, P01:12.7, P1:13.518, P3:14.028, P5:14.308, P10:14.754, P15:15.066, P25:15.543, P50:16.487, P75:17.509, P85:18.092, P90:18.502, P95:19.133, P97:19.559, P99:20.397, P999:21.949},
    340: { L:-0.3431, M:16.465, S:0.08822, P01:12.688, P1:13.503, P3:14.011, P5:14.291, P10:14.736, P15:15.047, P25:15.523, P50:16.465, P75:17.485, P85:18.068, P90:18.477, P95:19.108, P97:19.532, P99:20.37, P999:21.921},
    345: { L:-0.3479, M:16.4434, S:0.08817, P01:12.675, P1:13.488, P3:13.995, P5:14.274, P10:14.718, P15:15.029, P25:15.503, P50:16.443, P75:17.462, P85:18.044, P90:18.452, P95:19.082, P97:19.506, P99:20.343, P999:21.893},
    350: { L:-0.3526, M:16.4218, S:0.08812, P01:12.662, P1:13.473, P3:13.979, P5:14.257, P10:14.7, P15:15.01, P25:15.484, P50:16.422, P75:17.438, P85:18.019, P90:18.428, P95:19.056, P97:19.48, P99:20.316, P999:21.865},
    355: { L:-0.3573, M:16.4004, S:0.08807, P01:12.649, P1:13.458, P3:13.963, P5:14.24, P10:14.682, P15:14.992, P25:15.464, P50:16.4, P75:17.415, P85:17.995, P90:18.403, P95:19.031, P97:19.454, P99:20.289, P999:21.837},
    360: { L:-0.3619, M:16.379, S:0.08802, P01:12.636, P1:13.443, P3:13.946, P5:14.223, P10:14.665, P15:14.973, P25:15.445, P50:16.379, P75:17.392, P85:17.971, P90:18.378, P95:19.005, P97:19.428, P99:20.262, P999:21.809},
    365: { L:-0.3665, M:16.3578, S:0.08797, P01:12.624, P1:13.428, P3:13.93, P5:14.207, P10:14.647, P15:14.955, P25:15.425, P50:16.358, P75:17.369, P85:17.947, P90:18.354, P95:18.98, P97:19.402, P99:20.235, P999:21.782},
    370: { L:-0.371, M:16.3368, S:0.08792, P01:12.611, P1:13.414, P3:13.915, P5:14.19, P10:14.629, P15:14.936, P25:15.406, P50:16.337, P75:17.346, P85:17.924, P90:18.33, P95:18.955, P97:19.377, P99:20.209, P999:21.754},
    375: { L:-0.3754, M:16.3158, S:0.08787, P01:12.598, P1:13.399, P3:13.899, P5:14.174, P10:14.612, P15:14.918, P25:15.387, P50:16.316, P75:17.324, P85:17.9, P90:18.305, P95:18.93, P97:19.351, P99:20.183, P999:21.726},
    380: { L:-0.3798, M:16.2951, S:0.08782, P01:12.586, P1:13.385, P3:13.883, P5:14.157, P10:14.595, P15:14.9, P25:15.368, P50:16.295, P75:17.301, P85:17.877, P90:18.281, P95:18.905, P97:19.326, P99:20.156, P999:21.699},
    385: { L:-0.3841, M:16.2745, S:0.08778, P01:12.573, P1:13.37, P3:13.867, P5:14.141, P10:14.577, P15:14.882, P25:15.349, P50:16.275, P75:17.279, P85:17.854, P90:18.258, P95:18.881, P97:19.301, P99:20.131, P999:21.673},
    390: { L:-0.3884, M:16.2541, S:0.08773, P01:12.561, P1:13.356, P3:13.852, P5:14.125, P10:14.56, P15:14.865, P25:15.33, P50:16.254, P75:17.257, P85:17.831, P90:18.234, P95:18.856, P97:19.276, P99:20.105, P999:21.646},
    395: { L:-0.3926, M:16.2339, S:0.08769, P01:12.548, P1:13.341, P3:13.836, P5:14.109, P10:14.543, P15:14.847, P25:15.312, P50:16.234, P75:17.235, P85:17.808, P90:18.211, P95:18.832, P97:19.252, P99:20.08, P999:21.62},
    400: { L:-0.3968, M:16.2138, S:0.08764, P01:12.536, P1:13.327, P3:13.821, P5:14.093, P10:14.527, P15:14.83, P25:15.294, P50:16.214, P75:17.213, P85:17.785, P90:18.188, P95:18.808, P97:19.227, P99:20.055, P999:21.593},
    405: { L:-0.4009, M:16.194, S:0.0876, P01:12.524, P1:13.313, P3:13.806, P5:14.077, P10:14.51, P15:14.812, P25:15.275, P50:16.194, P75:17.192, P85:17.763, P90:18.165, P95:18.785, P97:19.203, P99:20.03, P999:21.568},
    410: { L:-0.4049, M:16.1744, S:0.08755, P01:12.512, P1:13.299, P3:13.791, P5:14.062, P10:14.494, P15:14.795, P25:15.258, P50:16.174, P75:17.171, P85:17.741, P90:18.143, P95:18.761, P97:19.179, P99:20.005, P999:21.541},
    415: { L:-0.409, M:16.1551, S:0.08751, P01:12.5, P1:13.286, P3:13.776, P5:14.046, P10:14.477, P15:14.779, P25:15.24, P50:16.155, P75:17.15, P85:17.719, P90:18.12, P95:18.739, P97:19.156, P99:19.981, P999:21.517},
    420: { L:-0.4129, M:16.1359, S:0.08747, P01:12.488, P1:13.272, P3:13.762, P5:14.031, P10:14.461, P15:14.762, P25:15.222, P50:16.136, P75:17.129, P85:17.698, P90:18.098, P95:18.716, P97:19.133, P99:19.957, P999:21.492},
    425: { L:-0.4169, M:16.117, S:0.08742, P01:12.477, P1:13.259, P3:13.747, P5:14.016, P10:14.445, P15:14.746, P25:15.205, P50:16.117, P75:17.108, P85:17.676, P90:18.076, P95:18.693, P97:19.11, P99:19.933, P999:21.466},
    430: { L:-0.4208, M:16.0983, S:0.08738, P01:12.465, P1:13.246, P3:13.733, P5:14.002, P10:14.43, P15:14.729, P25:15.188, P50:16.098, P75:17.088, P85:17.656, P90:18.055, P95:18.671, P97:19.087, P99:19.91, P999:21.442},
    435: { L:-0.4246, M:16.0798, S:0.08734, P01:12.454, P1:13.232, P3:13.719, P5:13.987, P10:14.414, P15:14.713, P25:15.171, P50:16.08, P75:17.068, P85:17.635, P90:18.034, P95:18.649, P97:19.065, P99:19.887, P999:21.418},
    440: { L:-0.4284, M:16.0616, S:0.0873, P01:12.443, P1:13.22, P3:13.705, P5:13.972, P10:14.399, P15:14.697, P25:15.154, P50:16.062, P75:17.049, P85:17.614, P90:18.013, P95:18.627, P97:19.043, P99:19.864, P999:21.394},
    445: { L:-0.4322, M:16.0436, S:0.08726, P01:12.432, P1:13.207, P3:13.691, P5:13.958, P10:14.384, P15:14.682, P25:15.138, P50:16.044, P75:17.029, P85:17.594, P90:17.992, P95:18.606, P97:19.021, P99:19.841, P999:21.371},
    450: { L:-0.4359, M:16.0258, S:0.08722, P01:12.421, P1:13.194, P3:13.678, P5:13.944, P10:14.369, P15:14.666, P25:15.121, P50:16.026, P75:17.01, P85:17.574, P90:17.972, P95:18.585, P97:18.999, P99:19.819, P999:21.347},
    455: { L:-0.4396, M:16.0083, S:0.08718, P01:12.41, P1:13.182, P3:13.664, P5:13.93, P10:14.354, P15:14.651, P25:15.105, P50:16.008, P75:16.991, P85:17.554, P90:17.951, P95:18.564, P97:18.978, P99:19.797, P999:21.324},
    460: { L:-0.4432, M:15.991, S:0.08714, P01:12.399, P1:13.169, P3:13.651, P5:13.916, P10:14.34, P15:14.636, P25:15.09, P50:15.991, P75:16.972, P85:17.535, P90:17.931, P95:18.543, P97:18.957, P99:19.775, P999:21.302},
    465: { L:-0.4468, M:15.9739, S:0.0871, P01:12.389, P1:13.157, P3:13.638, P5:13.903, P10:14.325, P15:14.621, P25:15.074, P50:15.974, P75:16.954, P85:17.516, P90:17.912, P95:18.523, P97:18.936, P99:19.754, P999:21.279},
    470: { L:-0.4504, M:15.9571, S:0.08706, P01:12.378, P1:13.146, P3:13.625, P5:13.889, P10:14.311, P15:14.606, P25:15.059, P50:15.957, P75:16.936, P85:17.497, P90:17.892, P95:18.503, P97:18.916, P99:19.733, P999:21.257},
    475: { L:-0.4539, M:15.9405, S:0.08702, P01:12.368, P1:13.134, P3:13.613, P5:13.876, P10:14.297, P15:14.592, P25:15.043, P50:15.941, P75:16.918, P85:17.478, P90:17.873, P95:18.483, P97:18.896, P99:19.712, P999:21.235},
    480: { L:-0.4574, M:15.9241, S:0.08698, P01:12.358, P1:13.122, P3:13.6, P5:13.863, P10:14.284, P15:14.578, P25:15.028, P50:15.924, P75:16.9, P85:17.46, P90:17.854, P95:18.464, P97:18.876, P99:19.691, P999:21.214},
    485: { L:-0.4609, M:15.908, S:0.08695, P01:12.348, P1:13.111, P3:13.588, P5:13.85, P10:14.27, P15:14.564, P25:15.014, P50:15.908, P75:16.882, P85:17.442, P90:17.836, P95:18.445, P97:18.856, P99:19.671, P999:21.193},
    490: { L:-0.4643, M:15.8922, S:0.08691, P01:12.339, P1:13.1, P3:13.576, P5:13.838, P10:14.257, P15:14.55, P25:14.999, P50:15.892, P75:16.865, P85:17.424, P90:17.818, P95:18.426, P97:18.837, P99:19.651, P999:21.172},
    495: { L:-0.4677, M:15.8766, S:0.08687, P01:12.329, P1:13.089, P3:13.564, P5:13.826, P10:14.244, P15:14.536, P25:14.985, P50:15.877, P75:16.848, P85:17.406, P90:17.8, P95:18.407, P97:18.818, P99:19.631, P999:21.151},
    500: { L:-0.4711, M:15.8612, S:0.08683, P01:12.32, P1:13.078, P3:13.552, P5:13.814, P10:14.231, P15:14.523, P25:14.971, P50:15.861, P75:16.832, P85:17.389, P90:17.782, P95:18.389, P97:18.799, P99:19.612, P999:21.131},
    505: { L:-0.4744, M:15.8461, S:0.0868, P01:12.31, P1:13.067, P3:13.54, P5:13.802, P10:14.218, P15:14.51, P25:14.957, P50:15.846, P75:16.815, P85:17.372, P90:17.765, P95:18.371, P97:18.781, P99:19.593, P999:21.112},
    510: { L:-0.4777, M:15.8313, S:0.08676, P01:12.301, P1:13.057, P3:13.529, P5:13.79, P10:14.206, P15:14.497, P25:14.943, P50:15.831, P75:16.799, P85:17.355, P90:17.747, P95:18.353, P97:18.763, P99:19.574, P999:21.092},
    515: { L:-0.481, M:15.8166, S:0.08673, P01:12.292, P1:13.046, P3:13.518, P5:13.778, P10:14.193, P15:14.484, P25:14.93, P50:15.817, P75:16.784, P85:17.339, P90:17.731, P95:18.336, P97:18.745, P99:19.556, P999:21.073},
    520: { L:-0.4842, M:15.8022, S:0.08669, P01:12.284, P1:13.036, P3:13.507, P5:13.767, P10:14.181, P15:14.472, P25:14.917, P50:15.802, P75:16.768, P85:17.323, P90:17.714, P95:18.318, P97:18.727, P99:19.538, P999:21.054},
    525: { L:-0.4874, M:15.7881, S:0.08666, P01:12.275, P1:13.026, P3:13.496, P5:13.756, P10:14.17, P15:14.459, P25:14.904, P50:15.788, P75:16.753, P85:17.307, P90:17.698, P95:18.302, P97:18.71, P99:19.52, P999:21.036},
    530: { L:-0.4906, M:15.7742, S:0.08662, P01:12.267, P1:13.016, P3:13.486, P5:13.745, P10:14.158, P15:14.447, P25:14.891, P50:15.774, P75:16.738, P85:17.291, P90:17.682, P95:18.285, P97:18.693, P99:19.503, P999:21.017},
    535: { L:-0.4937, M:15.7605, S:0.08659, P01:12.258, P1:13.007, P3:13.475, P5:13.734, P10:14.147, P15:14.436, P25:14.879, P50:15.761, P75:16.723, P85:17.276, P90:17.666, P95:18.269, P97:18.677, P99:19.486, P999:20.999},
    540: { L:-0.4969, M:15.747, S:0.08655, P01:12.25, P1:12.997, P3:13.465, P5:13.723, P10:14.135, P15:14.424, P25:14.866, P50:15.747, P75:16.708, P85:17.26, P90:17.65, P95:18.252, P97:18.66, P99:19.468, P999:20.981},
    545: { L:-0.5, M:15.7338, S:0.08652, P01:12.242, P1:12.988, P3:13.455, P5:13.713, P10:14.124, P15:14.412, P25:14.854, P50:15.734, P75:16.694, P85:17.246, P90:17.635, P95:18.237, P97:18.644, P99:19.452, P999:20.964},
    550: { L:-0.503, M:15.7208, S:0.08649, P01:12.234, P1:12.979, P3:13.445, P5:13.703, P10:14.113, P15:14.401, P25:14.842, P50:15.721, P75:16.68, P85:17.231, P90:17.62, P95:18.221, P97:18.629, P99:19.436, P999:20.947},
    555: { L:-0.5061, M:15.7081, S:0.08645, P01:12.227, P1:12.97, P3:13.436, P5:13.693, P10:14.103, P15:14.39, P25:14.831, P50:15.708, P75:16.666, P85:17.217, P90:17.605, P95:18.206, P97:18.613, P99:19.419, P999:20.93},
    560: { L:-0.5091, M:15.6956, S:0.08642, P01:12.219, P1:12.961, P3:13.426, P5:13.683, P10:14.092, P15:14.379, P25:14.819, P50:15.696, P75:16.652, P85:17.203, P90:17.591, P95:18.191, P97:18.598, P99:19.404, P999:20.914},
    565: { L:-0.5121, M:15.6833, S:0.08639, P01:12.211, P1:12.953, P3:13.417, P5:13.673, P10:14.082, P15:14.369, P25:14.808, P50:15.683, P75:16.639, P85:17.189, P90:17.577, P95:18.177, P97:18.583, P99:19.389, P999:20.898},
    570: { L:-0.5151, M:15.6712, S:0.08636, P01:12.204, P1:12.944, P3:13.408, P5:13.664, P10:14.072, P15:14.358, P25:14.797, P50:15.671, P75:16.626, P85:17.175, P90:17.563, P95:18.162, P97:18.568, P99:19.373, P999:20.883},
    575: { L:-0.518, M:15.6594, S:0.08632, P01:12.197, P1:12.936, P3:13.399, P5:13.654, P10:14.062, P15:14.348, P25:14.786, P50:15.659, P75:16.613, P85:17.162, P90:17.549, P95:18.148, P97:18.553, P99:19.358, P999:20.866},
    580: { L:-0.5209, M:15.6478, S:0.08629, P01:12.19, P1:12.928, P3:13.39, P5:13.645, P10:14.053, P15:14.338, P25:14.776, P50:15.648, P75:16.6, P85:17.149, P90:17.536, P95:18.134, P97:18.539, P99:19.344, P999:20.851},
    585: { L:-0.5238, M:15.6364, S:0.08626, P01:12.183, P1:12.92, P3:13.382, P5:13.636, P10:14.043, P15:14.328, P25:14.765, P50:15.636, P75:16.588, P85:17.136, P90:17.522, P95:18.12, P97:18.526, P99:19.329, P999:20.837},
    590: { L:-0.5267, M:15.6253, S:0.08623, P01:12.177, P1:12.913, P3:13.373, P5:13.628, P10:14.034, P15:14.319, P25:14.755, P50:15.625, P75:16.576, P85:17.123, P90:17.51, P95:18.107, P97:18.512, P99:19.315, P999:20.822},
    595: { L:-0.5295, M:15.6144, S:0.0862, P01:12.17, P1:12.905, P3:13.365, P5:13.619, P10:14.025, P15:14.309, P25:14.745, P50:15.614, P75:16.564, P85:17.111, P90:17.497, P95:18.094, P97:18.499, P99:19.302, P999:20.808},
    600: { L:-0.5323, M:15.6037, S:0.08617, P01:12.164, P1:12.898, P3:13.357, P5:13.611, P10:14.016, P15:14.3, P25:14.736, P50:15.604, P75:16.553, P85:17.099, P90:17.485, P95:18.081, P97:18.486, P99:19.288, P999:20.794},
    605: { L:-0.5351, M:15.5932, S:0.08614, P01:12.158, P1:12.89, P3:13.349, P5:13.603, P10:14.007, P15:14.291, P25:14.726, P50:15.593, P75:16.541, P85:17.087, P90:17.472, P95:18.069, P97:18.473, P99:19.275, P999:20.78},
    610: { L:-0.5379, M:15.5829, S:0.08611, P01:12.152, P1:12.883, P3:13.342, P5:13.595, P10:13.999, P15:14.282, P25:14.717, P50:15.583, P75:16.53, P85:17.075, P90:17.46, P95:18.056, P97:18.46, P99:19.262, P999:20.767},
    615: { L:-0.5407, M:15.5729, S:0.08608, P01:12.146, P1:12.876, P3:13.334, P5:13.587, P10:13.991, P15:14.273, P25:14.708, P50:15.573, P75:16.519, P85:17.064, P90:17.449, P95:18.044, P97:18.448, P99:19.249, P999:20.754},
    620: { L:-0.5434, M:15.5631, S:0.08605, P01:12.14, P1:12.87, P3:13.327, P5:13.579, P10:13.982, P15:14.265, P25:14.699, P50:15.563, P75:16.509, P85:17.053, P90:17.437, P95:18.033, P97:18.436, P99:19.237, P999:20.741},
    625: { L:-0.5461, M:15.5536, S:0.08602, P01:12.135, P1:12.863, P3:13.32, P5:13.572, P10:13.975, P15:14.257, P25:14.69, P50:15.554, P75:16.498, P85:17.042, P90:17.426, P95:18.021, P97:18.424, P99:19.225, P999:20.728},
    630: { L:-0.5488, M:15.5443, S:0.08599, P01:12.13, P1:12.857, P3:13.313, P5:13.565, P10:13.967, P15:14.249, P25:14.682, P50:15.544, P75:16.488, P85:17.032, P90:17.416, P95:18.01, P97:18.413, P99:19.213, P999:20.716},
    635: { L:-0.5515, M:15.5352, S:0.08596, P01:12.124, P1:12.851, P3:13.306, P5:13.558, P10:13.96, P15:14.241, P25:14.673, P50:15.535, P75:16.478, P85:17.021, P90:17.405, P95:17.999, P97:18.402, P99:19.202, P999:20.704},
    640: { L:-0.5542, M:15.5263, S:0.08593, P01:12.119, P1:12.845, P3:13.3, P5:13.551, P10:13.952, P15:14.234, P25:14.665, P50:15.526, P75:16.468, P85:17.011, P90:17.395, P95:17.988, P97:18.391, P99:19.19, P999:20.693},
    645: { L:-0.5568, M:15.5177, S:0.0859, P01:12.115, P1:12.839, P3:13.294, P5:13.544, P10:13.945, P15:14.226, P25:14.658, P50:15.518, P75:16.459, P85:17.001, P90:17.385, P95:17.978, P97:18.38, P99:19.179, P999:20.681},
    650: { L:-0.5594, M:15.5094, S:0.08587, P01:12.11, P1:12.834, P3:13.288, P5:13.538, P10:13.938, P15:14.219, P25:14.65, P50:15.509, P75:16.45, P85:16.992, P90:17.375, P95:17.968, P97:18.37, P99:19.169, P999:20.67},
    655: { L:-0.562, M:15.5012, S:0.08585, P01:12.105, P1:12.828, P3:13.281, P5:13.532, P10:13.932, P15:14.212, P25:14.643, P50:15.501, P75:16.441, P85:16.983, P90:17.366, P95:17.958, P97:18.36, P99:19.159, P999:20.66},
    660: { L:-0.5646, M:15.4933, S:0.08582, P01:12.101, P1:12.823, P3:13.276, P5:13.526, P10:13.925, P15:14.205, P25:14.635, P50:15.493, P75:16.432, P85:16.974, P90:17.356, P95:17.949, P97:18.35, P99:19.149, P999:20.65},
    665: { L:-0.5672, M:15.4856, S:0.08579, P01:12.097, P1:12.818, P3:13.27, P5:13.52, P10:13.919, P15:14.199, P25:14.629, P50:15.486, P75:16.424, P85:16.965, P90:17.347, P95:17.939, P97:18.341, P99:19.139, P999:20.64},
    670: { L:-0.5697, M:15.4782, S:0.08576, P01:12.093, P1:12.813, P3:13.265, P5:13.514, P10:13.913, P15:14.193, P25:14.622, P50:15.478, P75:16.416, P85:16.956, P90:17.339, P95:17.93, P97:18.332, P99:19.129, P999:20.63},
    675: { L:-0.5722, M:15.471, S:0.08574, P01:12.089, P1:12.808, P3:13.26, P5:13.509, P10:13.907, P15:14.186, P25:14.615, P50:15.471, P75:16.408, P85:16.948, P90:17.33, P95:17.922, P97:18.323, P99:19.12, P999:20.621},
    680: { L:-0.5747, M:15.4639, S:0.08571, P01:12.085, P1:12.804, P3:13.255, P5:13.503, P10:13.901, P15:14.181, P25:14.609, P50:15.464, P75:16.4, P85:16.94, P90:17.322, P95:17.913, P97:18.314, P99:19.111, P999:20.611},
    685: { L:-0.5772, M:15.4572, S:0.08568, P01:12.082, P1:12.8, P3:13.25, P5:13.499, P10:13.896, P15:14.175, P25:14.603, P50:15.457, P75:16.393, P85:16.932, P90:17.314, P95:17.905, P97:18.306, P99:19.103, P999:20.602},
    690: { L:-0.5797, M:15.4506, S:0.08565, P01:12.078, P1:12.795, P3:13.245, P5:13.494, P10:13.891, P15:14.169, P25:14.597, P50:15.451, P75:16.386, P85:16.925, P90:17.306, P95:17.897, P97:18.297, P99:19.094, P999:20.594},
    695: { L:-0.5821, M:15.4442, S:0.08563, P01:12.075, P1:12.791, P3:13.241, P5:13.489, P10:13.886, P15:14.164, P25:14.591, P50:15.444, P75:16.379, P85:16.918, P90:17.299, P95:17.889, P97:18.29, P99:19.086, P999:20.586},
    700: { L:-0.5846, M:15.4381, S:0.0856, P01:12.072, P1:12.787, P3:13.236, P5:13.484, P10:13.881, P15:14.159, P25:14.586, P50:15.438, P75:16.372, P85:16.911, P90:17.291, P95:17.882, P97:18.282, P99:19.078, P999:20.578},
    705: { L:-0.587, M:15.4321, S:0.08558, P01:12.069, P1:12.784, P3:13.232, P5:13.48, P10:13.876, P15:14.154, P25:14.58, P50:15.432, P75:16.365, P85:16.904, P90:17.285, P95:17.874, P97:18.275, P99:19.071, P999:20.57},
    710: { L:-0.5894, M:15.4263, S:0.08555, P01:12.066, P1:12.78, P3:13.228, P5:13.476, P10:13.871, P15:14.149, P25:14.575, P50:15.426, P75:16.359, P85:16.897, P90:17.278, P95:17.867, P97:18.268, P99:19.063, P999:20.562},
    715: { L:-0.5918, M:15.4208, S:0.08552, P01:12.063, P1:12.777, P3:13.225, P5:13.472, P10:13.867, P15:14.145, P25:14.57, P50:15.421, P75:16.353, P85:16.891, P90:17.271, P95:17.86, P97:18.261, P99:19.056, P999:20.555},
    720: { L:-0.5942, M:15.4154, S:0.0855, P01:12.061, P1:12.773, P3:13.221, P5:13.468, P10:13.863, P15:14.14, P25:14.566, P50:15.415, P75:16.347, P85:16.885, P90:17.265, P95:17.854, P97:18.254, P99:19.049, P999:20.548},
    725: { L:-0.5965, M:15.4102, S:0.08547, P01:12.058, P1:12.77, P3:13.217, P5:13.464, P10:13.859, P15:14.136, P25:14.561, P50:15.41, P75:16.341, P85:16.878, P90:17.259, P95:17.847, P97:18.247, P99:19.043, P999:20.541},
    726: { L:-0.597, M:15.4092, S:0.08547, P01:12.058, P1:12.77, P3:13.217, P5:13.463, P10:13.858, P15:14.135, P25:14.56, P50:15.409, P75:16.34, P85:16.877, P90:17.257, P95:17.846, P97:18.246, P99:19.042, P999:20.54},
};

export default bfaGirls;