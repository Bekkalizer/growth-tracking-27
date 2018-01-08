const lhfaBoys = {
    0: { L:1, M:49.8842, S:0.03795, P01:44.034, P1:45.48, P3:46.324, P5:46.77, P10:47.458, P15:47.922, P25:48.607, P50:49.884, P75:51.161, P85:51.846, P90:52.31, P95:52.998, P97:53.445, P99:54.288, P999:55.734},
    5: { L:1, M:50.7635, S:0.03744, P01:44.89, P1:46.342, P3:47.189, P5:47.637, P10:48.328, P15:48.794, P25:49.482, P50:50.764, P75:52.045, P85:52.733, P90:53.199, P95:53.89, P97:54.338, P99:55.185, P999:56.637},
    10: { L:1, M:51.6427, S:0.03693, P01:45.749, P1:47.206, P3:48.056, P5:48.506, P10:49.199, P15:49.666, P25:50.356, P50:51.643, P75:52.929, P85:53.619, P90:54.087, P95:54.78, P97:55.23, P99:56.079, P999:57.536},
    15: { L:1, M:52.4978, S:0.03645, P01:46.585, P1:48.046, P3:48.899, P5:49.35, P10:50.045, P15:50.515, P25:51.207, P50:52.498, P75:53.788, P85:54.481, P90:54.95, P95:55.645, P97:56.097, P99:56.949, P999:58.411},
    20: { L:1, M:53.2441, S:0.03615, P01:47.296, P1:48.766, P3:49.624, P5:50.078, P10:50.777, P15:51.249, P25:51.946, P50:53.244, P75:54.542, P85:55.239, P90:55.711, P95:56.41, P97:56.864, P99:57.722, P999:59.192},
    25: { L:1, M:53.9664, S:0.03586, P01:47.986, P1:49.464, P3:50.327, P5:50.783, P10:51.486, P15:51.961, P25:52.661, P50:53.966, P75:55.272, P85:55.972, P90:56.447, P95:57.15, P97:57.606, P99:58.468, P999:59.947},
    30: { L:1, M:54.6645, S:0.03559, P01:48.652, P1:50.139, P3:51.005, P5:51.464, P10:52.171, P15:52.648, P25:53.352, P50:54.665, P75:55.977, P85:56.681, P90:57.158, P95:57.865, P97:58.324, P99:59.19, P999:60.677},
    35: { L:1, M:55.3374, S:0.03534, P01:49.294, P1:50.788, P3:51.659, P5:52.121, P10:52.831, P15:53.311, P25:54.018, P50:55.337, P75:56.656, P85:57.364, P90:57.844, P95:58.554, P97:59.016, P99:59.887, P999:61.381},
    40: { L:1, M:55.9841, S:0.0351, P01:49.912, P1:51.413, P3:52.288, P5:52.752, P10:53.466, P15:53.947, P25:54.659, P50:55.984, P75:57.31, P85:58.021, P90:58.502, P95:59.216, P97:59.68, P99:60.555, P999:62.057},
    45: { L:1, M:56.6056, S:0.03488, P01:50.504, P1:52.012, P3:52.892, P5:53.358, P10:54.075, P15:54.559, P25:55.274, P50:56.606, P75:57.937, P85:58.652, P90:59.136, P95:59.853, P97:60.319, P99:61.199, P999:62.707},
    50: { L:1, M:57.2026, S:0.03466, P01:51.076, P1:52.59, P3:53.474, P5:53.941, P10:54.662, P15:55.148, P25:55.865, P50:57.203, P75:58.54, P85:59.257, P90:59.743, P95:60.464, P97:60.932, P99:61.815, P999:63.329},
    55: { L:1, M:57.7767, S:0.03446, P01:51.624, P1:53.145, P3:54.032, P5:54.502, P10:55.225, P15:55.713, P25:56.434, P50:57.777, P75:59.12, P85:59.84, P90:60.328, P95:61.052, P97:61.521, P99:62.408, P999:63.929},
    60: { L:1, M:58.3299, S:0.03427, P01:52.153, P1:53.68, P3:54.57, P5:55.042, P10:55.768, P15:56.258, P25:56.982, P50:58.33, P75:59.678, P85:60.402, P90:60.892, P95:61.618, P97:62.09, P99:62.98, P999:64.507},
    65: { L:1, M:58.8664, S:0.03409, P01:52.665, P1:54.198, P3:55.092, P5:55.566, P10:56.295, P15:56.787, P25:57.513, P50:58.866, P75:60.22, P85:60.946, P90:61.438, P95:62.167, P97:62.641, P99:63.535, P999:65.068},
    70: { L:1, M:59.3872, S:0.03392, P01:53.162, P1:54.701, P3:55.599, P5:56.074, P10:56.806, P15:57.299, P25:58.028, P50:59.387, P75:60.746, P85:61.475, P90:61.969, P95:62.701, P97:63.176, P99:64.073, P999:65.612},
    75: { L:1, M:59.892, S:0.03375, P01:53.646, P1:55.19, P3:56.09, P5:56.567, P10:57.302, P15:57.797, P25:58.529, P50:59.892, P75:61.255, P85:61.987, P90:62.482, P95:63.217, P97:63.694, P99:64.594, P999:66.138},
    80: { L:1, M:60.3808, S:0.0336, P01:54.111, P1:55.661, P3:56.565, P5:57.044, P10:57.781, P15:58.278, P25:59.012, P50:60.381, P75:61.749, P85:62.484, P90:62.981, P95:63.718, P97:64.197, P99:65.1, P999:66.65},
    85: { L:1, M:60.8539, S:0.03345, P01:54.564, P1:56.118, P3:57.025, P5:57.506, P10:58.245, P15:58.744, P25:59.481, P50:60.854, P75:62.227, P85:62.964, P90:63.463, P95:64.202, P97:64.682, P99:65.589, P999:67.144},
    90: { L:1, M:61.3115, S:0.03331, P01:55, P1:56.56, P3:57.47, P5:57.952, P10:58.694, P15:59.195, P25:59.934, P50:61.312, P75:62.689, P85:63.428, P90:63.929, P95:64.671, P97:65.153, P99:66.063, P999:67.623},
    95: { L:1, M:61.7543, S:0.03318, P01:55.422, P1:56.988, P3:57.901, P5:58.384, P10:59.128, P15:59.631, P25:60.372, P50:61.754, P75:63.136, P85:63.878, P90:64.38, P95:65.125, P97:65.608, P99:66.521, P999:68.086},
    100: { L:1, M:62.1826, S:0.03306, P01:55.83, P1:57.4, P3:58.316, P5:58.801, P10:59.548, P15:60.052, P25:60.796, P50:62.183, P75:63.569, P85:64.313, P90:64.817, P95:65.564, P97:66.049, P99:66.965, P999:68.535},
    105: { L:1, M:62.5966, S:0.03294, P01:56.225, P1:57.8, P3:58.719, P5:59.205, P10:59.954, P15:60.46, P25:61.206, P50:62.597, P75:63.987, P85:64.734, P90:65.239, P95:65.988, P97:66.475, P99:67.393, P999:68.968},
    110: { L:1, M:62.9969, S:0.03282, P01:56.608, P1:58.187, P3:59.108, P5:59.596, P10:60.347, P15:60.854, P25:61.602, P50:62.997, P75:64.391, P85:65.14, P90:65.647, P95:66.398, P97:66.886, P99:67.807, P999:69.386},
    115: { L:1, M:63.3839, S:0.03271, P01:56.977, P1:58.561, P3:59.484, P5:59.974, P10:60.727, P15:61.235, P25:61.985, P50:63.384, P75:64.782, P85:65.533, P90:66.041, P95:66.794, P97:67.283, P99:68.207, P999:69.791},
    120: { L:1, M:63.758, S:0.03261, P01:57.333, P1:58.921, P3:59.848, P5:60.338, P10:61.093, P15:61.603, P25:62.356, P50:63.758, P75:65.16, P85:65.913, P90:66.423, P95:67.178, P97:67.668, P99:68.595, P999:70.183},
    125: { L:1, M:64.1197, S:0.03251, P01:57.678, P1:59.27, P3:60.199, P5:60.691, P10:61.448, P15:61.959, P25:62.714, P50:64.12, P75:65.526, P85:66.28, P90:66.791, P95:67.548, P97:68.04, P99:68.969, P999:70.561},
    130: { L:1, M:64.4697, S:0.03241, P01:58.013, P1:59.609, P3:60.54, P5:61.033, P10:61.792, P15:62.304, P25:63.06, P50:64.47, P75:65.879, P85:66.635, P90:67.147, P95:67.907, P97:68.4, P99:69.331, P999:70.927},
    135: { L:1, M:64.8088, S:0.03232, P01:58.336, P1:59.936, P3:60.869, P5:61.363, P10:62.124, P15:62.638, P25:63.396, P50:64.809, P75:66.222, P85:66.98, P90:67.493, P95:68.254, P97:68.748, P99:69.682, P999:71.282},
    140: { L:1, M:65.138, S:0.03223, P01:58.65, P1:60.254, P3:61.189, P5:61.685, P10:62.448, P15:62.962, P25:63.722, P50:65.138, P75:66.554, P85:67.314, P90:67.828, P95:68.591, P97:69.087, P99:70.022, P999:71.626},
    145: { L:1, M:65.4579, S:0.03215, P01:58.955, P1:60.562, P3:61.5, P5:61.996, P10:62.761, P15:63.277, P25:64.038, P50:65.458, P75:66.877, P85:67.639, P90:68.155, P95:68.919, P97:69.416, P99:70.354, P999:71.961},
    150: { L:1, M:65.769, S:0.03207, P01:59.251, P1:60.862, P3:61.802, P5:62.3, P10:63.066, P15:63.583, P25:64.346, P50:65.769, P75:67.192, P85:67.955, P90:68.472, P95:69.238, P97:69.736, P99:70.676, P999:72.287},
    155: { L:1, M:66.0721, S:0.032, P01:59.538, P1:61.153, P3:62.096, P5:62.594, P10:63.363, P15:63.881, P25:64.646, P50:66.072, P75:67.498, P85:68.263, P90:68.782, P95:69.55, P97:70.049, P99:70.991, P999:72.606},
    160: { L:1, M:66.3674, S:0.03193, P01:59.819, P1:61.438, P3:62.382, P5:62.882, P10:63.652, P15:64.171, P25:64.938, P50:66.367, P75:67.797, P85:68.564, P90:69.083, P95:69.853, P97:70.353, P99:71.297, P999:72.916},
    165: { L:1, M:66.6556, S:0.03186, P01:60.093, P1:61.715, P3:62.661, P5:63.163, P10:63.934, P15:64.455, P25:65.223, P50:66.656, P75:68.088, P85:68.857, P90:69.377, P95:70.149, P97:70.65, P99:71.596, P999:73.218},
    170: { L:1, M:66.9373, S:0.0318, P01:60.359, P1:61.985, P3:62.934, P5:63.436, P10:64.209, P15:64.731, P25:65.502, P50:66.937, P75:68.373, P85:69.143, P90:69.665, P95:70.439, P97:70.941, P99:71.889, P999:73.515},
    175: { L:1, M:67.2132, S:0.03174, P01:60.621, P1:62.25, P3:63.201, P5:63.704, P10:64.479, P15:65.002, P25:65.774, P50:67.213, P75:68.652, P85:69.424, P90:69.947, P95:70.722, P97:71.226, P99:72.176, P999:73.806},
    180: { L:1, M:67.4836, S:0.03168, P01:60.877, P1:62.51, P3:63.463, P5:63.967, P10:64.744, P15:65.268, P25:66.042, P50:67.484, P75:68.926, P85:69.699, P90:70.223, P95:71, P97:71.505, P99:72.457, P999:74.09},
    185: { L:1, M:67.7491, S:0.03163, P01:61.127, P1:62.764, P3:63.719, P5:64.224, P10:65.003, P15:65.528, P25:66.304, P50:67.749, P75:69.194, P85:69.97, P90:70.495, P95:71.274, P97:71.779, P99:72.734, P999:74.371},
    190: { L:1, M:68.0101, S:0.03158, P01:61.373, P1:63.014, P3:63.971, P5:64.477, P10:65.258, P15:65.784, P25:66.561, P50:68.01, P75:69.459, P85:70.236, P90:70.763, P95:71.543, P97:72.05, P99:73.007, P999:74.647},
    195: { L:1, M:68.2669, S:0.03153, P01:61.615, P1:63.26, P3:64.219, P5:64.726, P10:65.508, P15:66.036, P25:66.815, P50:68.267, P75:69.719, P85:70.498, P90:71.025, P95:71.807, P97:72.315, P99:73.274, P999:74.918},
    200: { L:1, M:68.5198, S:0.03149, P01:61.852, P1:63.5, P3:64.462, P5:64.971, P10:65.755, P15:66.283, P25:67.064, P50:68.52, P75:69.975, P85:70.756, P90:71.285, P95:72.069, P97:72.578, P99:73.539, P999:75.188},
    205: { L:1, M:68.7691, S:0.03145, P01:62.086, P1:63.738, P3:64.701, P5:65.212, P10:65.997, P15:66.528, P25:67.31, P50:68.769, P75:70.228, P85:71.011, P90:71.541, P95:72.327, P97:72.837, P99:73.8, P999:75.453},
    210: { L:1, M:69.0152, S:0.03141, P01:62.316, P1:63.972, P3:64.938, P5:65.45, P10:66.237, P15:66.768, P25:67.553, P50:69.015, P75:70.477, P85:71.262, P90:71.793, P95:72.581, P97:73.092, P99:74.058, P999:75.714},
    215: { L:1, M:69.2584, S:0.03138, P01:62.542, P1:64.202, P3:65.171, P5:65.684, P10:66.473, P15:67.006, P25:67.793, P50:69.258, P75:70.724, P85:71.511, P90:72.044, P95:72.833, P97:73.346, P99:74.314, P999:75.974},
    220: { L:1, M:69.499, S:0.03135, P01:62.766, P1:64.43, P3:65.401, P5:65.915, P10:66.707, P15:67.241, P25:68.029, P50:69.499, P75:70.969, P85:71.757, P90:72.291, P95:73.083, P97:73.597, P99:74.568, P999:76.232},
    225: { L:1, M:69.737, S:0.03132, P01:62.987, P1:64.656, P3:65.629, P5:66.144, P10:66.938, P15:67.473, P25:68.264, P50:69.737, P75:71.21, P85:72.001, P90:72.536, P95:73.33, P97:73.845, P99:74.818, P999:76.487},
    230: { L:1, M:69.9728, S:0.0313, P01:63.205, P1:64.878, P3:65.854, P5:66.37, P10:67.166, P15:67.703, P25:68.496, P50:69.973, P75:71.45, P85:72.243, P90:72.78, P95:73.575, P97:74.092, P99:75.068, P999:76.741},
    235: { L:1, M:70.2064, S:0.03127, P01:63.422, P1:65.099, P3:66.077, P5:66.595, P10:67.393, P15:67.931, P25:68.726, P50:70.206, P75:71.687, P85:72.482, P90:73.02, P95:73.817, P97:74.335, P99:75.314, P999:76.991},
    240: { L:1, M:70.4382, S:0.03125, P01:63.636, P1:65.317, P3:66.298, P5:66.818, P10:67.617, P15:68.157, P25:68.954, P50:70.438, P75:71.923, P85:72.72, P90:73.259, P95:74.059, P97:74.578, P99:75.559, P999:77.24},
    245: { L:1, M:70.6683, S:0.03123, P01:63.848, P1:65.534, P3:66.517, P5:67.038, P10:67.84, P15:68.381, P25:69.18, P50:70.668, P75:72.157, P85:72.956, P90:73.497, P95:74.298, P97:74.819, P99:75.802, P999:77.488},
    250: { L:1, M:70.8967, S:0.03122, P01:64.057, P1:65.748, P3:66.734, P5:67.256, P10:68.06, P15:68.603, P25:69.404, P50:70.897, P75:72.39, P85:73.191, P90:73.733, P95:74.537, P97:75.06, P99:76.046, P999:77.737},
    255: { L:1, M:71.1235, S:0.03121, P01:64.264, P1:65.96, P3:66.949, P5:67.472, P10:68.279, P15:68.823, P25:69.626, P50:71.124, P75:72.621, P85:73.424, P90:73.968, P95:74.775, P97:75.298, P99:76.287, P999:77.983},
    260: { L:1, M:71.3488, S:0.03119, P01:64.472, P1:66.172, P3:67.163, P5:67.688, P10:68.497, P15:69.042, P25:69.848, P50:71.349, P75:72.85, P85:73.655, P90:74.201, P95:75.009, P97:75.534, P99:76.526, P999:78.226},
    265: { L:1, M:71.5725, S:0.03118, P01:64.676, P1:66.381, P3:67.375, P5:67.902, P10:68.713, P15:69.26, P25:70.067, P50:71.573, P75:73.078, P85:73.885, P90:74.432, P95:75.243, P97:75.77, P99:76.764, P999:78.469},
    270: { L:1, M:71.7947, S:0.03118, P01:64.877, P1:66.587, P3:67.584, P5:68.113, P10:68.926, P15:69.475, P25:70.285, P50:71.795, P75:73.305, P85:74.115, P90:74.664, P95:75.477, P97:76.005, P99:77.002, P999:78.712},
    275: { L:1, M:72.0154, S:0.03117, P01:65.079, P1:66.793, P3:67.794, P5:68.323, P10:69.139, P15:69.689, P25:70.501, P50:72.015, P75:73.529, P85:74.342, P90:74.892, P95:75.708, P97:76.237, P99:77.237, P999:78.952},
    280: { L:1, M:72.2347, S:0.03117, P01:65.277, P1:66.997, P3:68, P5:68.531, P10:69.349, P15:69.901, P25:70.716, P50:72.235, P75:73.753, P85:74.568, P90:75.12, P95:75.938, P97:76.469, P99:77.473, P999:79.193},
    285: { L:1, M:72.4523, S:0.03117, P01:65.474, P1:67.199, P3:68.205, P5:68.738, P10:69.558, P15:70.112, P25:70.929, P50:72.452, P75:73.976, P85:74.793, P90:75.346, P95:76.167, P97:76.7, P99:77.706, P999:79.431},
    290: { L:1, M:72.6684, S:0.03117, P01:65.669, P1:67.399, P3:68.408, P5:68.943, P10:69.766, P15:70.321, P25:71.141, P50:72.668, P75:74.196, P85:75.016, P90:75.571, P95:76.394, P97:76.929, P99:77.938, P999:79.668},
    295: { L:1, M:72.883, S:0.03117, P01:65.863, P1:67.598, P3:68.61, P5:69.146, P10:69.972, P15:70.528, P25:71.351, P50:72.883, P75:74.415, P85:75.238, P90:75.794, P95:76.62, P97:77.156, P99:78.168, P999:79.903},
    300: { L:1, M:73.096, S:0.03118, P01:66.053, P1:67.794, P3:68.809, P5:69.347, P10:70.175, P15:70.734, P25:71.559, P50:73.096, P75:74.633, P85:75.458, P90:76.017, P95:76.845, P97:77.383, P99:78.398, P999:80.139},
    305: { L:1, M:73.3075, S:0.03118, P01:66.244, P1:67.99, P3:69.009, P5:69.548, P10:70.378, P15:70.938, P25:71.766, P50:73.308, P75:74.849, P85:75.677, P90:76.237, P95:77.067, P97:77.606, P99:78.625, P999:80.371},
    310: { L:1, M:73.5176, S:0.03119, P01:66.432, P1:68.183, P3:69.205, P5:69.746, P10:70.579, P15:71.141, P25:71.971, P50:73.518, P75:75.064, P85:75.894, P90:76.456, P95:77.289, P97:77.83, P99:78.852, P999:80.604},
    315: { L:1, M:73.7261, S:0.0312, P01:66.618, P1:68.375, P3:69.4, P5:69.943, P10:70.778, P15:71.342, P25:72.175, P50:73.726, P75:75.278, P85:76.11, P90:76.674, P95:77.51, P97:78.052, P99:79.077, P999:80.834},
    320: { L:1, M:73.9333, S:0.03121, P01:66.803, P1:68.565, P3:69.593, P5:70.138, P10:70.976, P15:71.542, P25:72.377, P50:73.933, P75:75.49, P85:76.325, P90:76.89, P95:77.729, P97:78.273, P99:79.301, P999:81.064},
    325: { L:1, M:74.139, S:0.03122, P01:66.986, P1:68.754, P3:69.786, P5:70.332, P10:71.173, P15:71.74, P25:72.578, P50:74.139, P75:75.7, P85:76.538, P90:77.105, P95:77.946, P97:78.492, P99:79.524, P999:81.292},
    330: { L:1, M:74.3433, S:0.03124, P01:67.166, P1:68.94, P3:69.975, P5:70.523, P10:71.367, P15:71.936, P25:72.777, P50:74.343, P75:75.91, P85:76.75, P90:77.32, P95:78.163, P97:78.711, P99:79.746, P999:81.52},
    335: { L:1, M:74.5464, S:0.03125, P01:67.347, P1:69.127, P3:70.165, P5:70.715, P10:71.561, P15:72.132, P25:72.975, P50:74.546, P75:76.118, P85:76.961, P90:77.532, P95:78.378, P97:78.928, P99:79.966, P999:81.745},
    340: { L:1, M:74.7481, S:0.03127, P01:67.525, P1:69.311, P3:70.352, P5:70.903, P10:71.753, P15:72.326, P25:73.172, P50:74.748, P75:76.325, P85:77.171, P90:77.744, P95:78.593, P97:79.144, P99:80.186, P999:81.971},
    345: { L:1, M:74.9486, S:0.03129, P01:67.702, P1:69.493, P3:70.538, P5:71.091, P10:71.943, P15:72.518, P25:73.367, P50:74.949, P75:76.53, P85:77.379, P90:77.954, P95:78.806, P97:79.359, P99:80.404, P999:82.196},
    350: { L:1, M:75.1479, S:0.03131, P01:67.877, P1:69.674, P3:70.723, P5:71.278, P10:72.133, P15:72.709, P25:73.561, P50:75.148, P75:76.735, P85:77.587, P90:78.163, P95:79.018, P97:79.573, P99:80.622, P999:82.419},
    355: { L:1, M:75.346, S:0.03133, P01:68.051, P1:69.854, P3:70.906, P5:71.463, P10:72.321, P15:72.899, P25:73.754, P50:75.346, P75:76.938, P85:77.793, P90:78.371, P95:79.229, P97:79.786, P99:80.838, P999:82.641},
    360: { L:1, M:75.5431, S:0.03135, P01:68.225, P1:70.034, P3:71.089, P5:71.648, P10:72.508, P15:73.089, P25:73.946, P50:75.543, P75:77.14, P85:77.998, P90:78.578, P95:79.439, P97:79.997, P99:81.053, P999:82.862},
    365: { L:1, M:75.7391, S:0.03137, P01:68.397, P1:70.212, P3:71.27, P5:71.831, P10:72.694, P15:73.277, P25:74.137, P50:75.739, P75:77.342, P85:78.202, P90:78.784, P95:79.647, P97:80.208, P99:81.266, P999:83.081},
    370: { L:1, M:75.934, S:0.0314, P01:68.566, P1:70.387, P3:71.45, P5:72.012, P10:72.878, P15:73.463, P25:74.326, P50:75.934, P75:77.542, P85:78.405, P90:78.99, P95:79.856, P97:80.418, P99:81.481, P999:83.302},
    375: { L:1, M:76.1279, S:0.03142, P01:68.736, P1:70.563, P3:71.629, P5:72.194, P10:73.063, P15:73.649, P25:74.515, P50:76.128, P75:77.741, P85:78.607, P90:79.193, P95:80.062, P97:80.627, P99:81.692, P999:83.52},
    380: { L:1, M:76.3207, S:0.03145, P01:68.903, P1:70.737, P3:71.806, P5:72.373, P10:73.245, P15:73.833, P25:74.702, P50:76.321, P75:77.94, P85:78.808, P90:79.397, P95:80.269, P97:80.835, P99:81.905, P999:83.738},
    385: { L:1, M:76.5124, S:0.03148, P01:69.069, P1:70.909, P3:71.982, P5:72.551, P10:73.426, P15:74.016, P25:74.888, P50:76.512, P75:78.137, P85:79.009, P90:79.599, P95:80.474, P97:81.042, P99:82.116, P999:83.956},
    390: { L:1, M:76.703, S:0.03151, P01:69.234, P1:71.08, P3:72.157, P5:72.728, P10:73.606, P15:74.198, P25:75.073, P50:76.703, P75:78.333, P85:79.208, P90:79.8, P95:80.678, P97:81.249, P99:82.326, P999:84.172},
    395: { L:1, M:76.8926, S:0.03154, P01:69.398, P1:71.251, P3:72.331, P5:72.904, P10:73.785, P15:74.379, P25:75.257, P50:76.893, P75:78.528, P85:79.406, P90:80.001, P95:80.882, P97:81.454, P99:82.534, P999:84.387},
    400: { L:1, M:77.0812, S:0.03157, P01:69.561, P1:71.42, P3:72.504, P5:73.079, P10:73.963, P15:74.559, P25:75.44, P50:77.081, P75:78.723, P85:79.603, P90:80.2, P95:81.084, P97:81.658, P99:82.742, P999:84.601},
    405: { L:1, M:77.2687, S:0.0316, P01:69.723, P1:71.588, P3:72.676, P5:73.252, P10:74.14, P15:74.738, P25:75.622, P50:77.269, P75:78.916, P85:79.799, P90:80.398, P95:81.285, P97:81.861, P99:82.949, P999:84.814},
    410: { L:1, M:77.4551, S:0.03163, P01:69.884, P1:71.756, P3:72.847, P5:73.425, P10:74.315, P15:74.916, P25:75.803, P50:77.455, P75:79.108, P85:79.994, P90:80.595, P95:81.485, P97:82.063, P99:83.154, P999:85.026},
    415: { L:1, M:77.6406, S:0.03166, P01:70.044, P1:71.922, P3:73.017, P5:73.597, P10:74.49, P15:75.093, P25:75.983, P50:77.641, P75:79.299, P85:80.188, P90:80.791, P95:81.684, P97:82.264, P99:83.359, P999:85.237},
    420: { L:1, M:77.8251, S:0.0317, P01:70.201, P1:72.086, P3:73.185, P5:73.767, P10:74.663, P15:75.268, P25:76.161, P50:77.825, P75:79.489, P85:80.382, P90:80.987, P95:81.883, P97:82.465, P99:83.564, P999:85.449},
    425: { L:1, M:78.0085, S:0.03173, P01:70.36, P1:72.25, P3:73.353, P5:73.937, P10:74.836, P15:75.443, P25:76.339, P50:78.009, P75:79.678, P85:80.574, P90:81.181, P95:82.08, P97:82.664, P99:83.767, P999:85.657},
    430: { L:1, M:78.1911, S:0.03177, P01:70.515, P1:72.412, P3:73.519, P5:74.105, P10:75.008, P15:75.616, P25:76.516, P50:78.191, P75:79.867, P85:80.766, P90:81.375, P95:82.277, P97:82.863, P99:83.97, P999:85.868},
    435: { L:1, M:78.3727, S:0.0318, P01:70.671, P1:72.575, P3:73.685, P5:74.273, P10:75.179, P15:75.79, P25:76.692, P50:78.373, P75:80.054, P85:80.956, P90:81.567, P95:82.472, P97:83.06, P99:84.171, P999:86.074},
    440: { L:1, M:78.5534, S:0.03184, P01:70.824, P1:72.735, P3:73.849, P5:74.439, P10:75.348, P15:75.961, P25:76.866, P50:78.553, P75:80.24, P85:81.146, P90:81.759, P95:82.667, P97:83.258, P99:84.372, P999:86.283},
    445: { L:1, M:78.7332, S:0.03188, P01:70.977, P1:72.894, P3:74.012, P5:74.605, P10:75.516, P15:76.132, P25:77.04, P50:78.733, P75:80.426, P85:81.335, P90:81.95, P95:82.862, P97:83.454, P99:84.572, P999:86.49},
    450: { L:1, M:78.9122, S:0.03192, P01:71.128, P1:73.052, P3:74.175, P5:74.769, P10:75.684, P15:76.302, P25:77.213, P50:78.912, P75:80.611, P85:81.523, P90:82.14, P95:83.055, P97:83.65, P99:84.772, P999:86.696},
    455: { L:1, M:79.0903, S:0.03196, P01:71.279, P1:73.21, P3:74.336, P5:74.933, P10:75.851, P15:76.47, P25:77.385, P50:79.09, P75:80.795, P85:81.71, P90:82.33, P95:83.248, P97:83.844, P99:84.971, P999:86.902},
    460: { L:1, M:79.2676, S:0.032, P01:71.429, P1:73.367, P3:74.497, P5:75.095, P10:76.017, P15:76.639, P25:77.557, P50:79.268, P75:80.978, P85:81.897, P90:82.518, P95:83.44, P97:84.038, P99:85.169, P999:87.106},
    465: { L:1, M:79.4441, S:0.03204, P01:71.578, P1:73.523, P3:74.657, P5:75.257, P10:76.182, P15:76.806, P25:77.727, P50:79.444, P75:81.161, P85:82.082, P90:82.706, P95:83.631, P97:84.231, P99:85.366, P999:87.31},
    470: { L:1, M:79.6198, S:0.03208, P01:71.727, P1:73.678, P3:74.816, P5:75.419, P10:76.346, P15:76.973, P25:77.897, P50:79.62, P75:81.343, P85:82.267, P90:82.893, P95:83.821, P97:84.424, P99:85.562, P999:87.513},
    475: { L:1, M:79.7947, S:0.03212, P01:71.874, P1:73.832, P3:74.974, P5:75.579, P10:76.51, P15:77.138, P25:78.066, P50:79.795, P75:81.523, P85:82.451, P90:83.079, P95:84.01, P97:84.615, P99:85.757, P999:87.715},
    480: { L:1, M:79.9688, S:0.03216, P01:72.021, P1:73.986, P3:75.132, P5:75.739, P10:76.673, P15:77.303, P25:78.234, P50:79.969, P75:81.703, P85:82.634, P90:83.265, P95:84.199, P97:84.806, P99:85.952, P999:87.916},
    485: { L:1, M:80.1422, S:0.0322, P01:72.168, P1:74.139, P3:75.289, P5:75.898, P10:76.835, P15:77.468, P25:78.402, P50:80.142, P75:81.883, P85:82.817, P90:83.449, P95:84.387, P97:84.996, P99:86.146, P999:88.117},
    490: { L:1, M:80.3148, S:0.03225, P01:72.311, P1:74.289, P3:75.443, P5:76.054, P10:76.995, P15:77.63, P25:78.568, P50:80.315, P75:82.062, P85:82.999, P90:83.634, P95:84.575, P97:85.186, P99:86.34, P999:88.319},
    495: { L:1, M:80.4867, S:0.03229, P01:72.455, P1:74.441, P3:75.599, P5:76.212, P10:77.156, P15:77.793, P25:78.734, P50:80.487, P75:82.24, P85:83.18, P90:83.817, P95:84.762, P97:85.375, P99:86.533, P999:88.518},
    500: { L:1, M:80.6578, S:0.03234, P01:72.597, P1:74.59, P3:75.752, P5:76.367, P10:77.315, P15:77.954, P25:78.898, P50:80.658, P75:82.417, P85:83.361, P90:84.001, P95:84.948, P97:85.564, P99:86.726, P999:88.719},
    505: { L:1, M:80.8282, S:0.03238, P01:72.74, P1:74.74, P3:75.906, P5:76.523, P10:77.474, P15:78.116, P25:79.063, P50:80.828, P75:82.593, P85:83.541, P90:84.182, P95:85.133, P97:85.751, P99:86.917, P999:88.916},
    510: { L:1, M:80.9978, S:0.03243, P01:72.881, P1:74.887, P3:76.057, P5:76.677, P10:77.631, P15:78.275, P25:79.226, P50:80.998, P75:82.77, P85:83.72, P90:84.364, P95:85.318, P97:85.938, P99:87.109, P999:89.115},
    515: { L:1, M:81.1667, S:0.03247, P01:73.022, P1:75.036, P3:76.21, P5:76.832, P10:77.789, P15:78.435, P25:79.389, P50:81.167, P75:82.944, P85:83.898, P90:84.544, P95:85.502, P97:86.123, P99:87.298, P999:89.311},
    520: { L:1, M:81.3348, S:0.03252, P01:73.161, P1:75.182, P3:76.36, P5:76.984, P10:77.945, P15:78.593, P25:79.551, P50:81.335, P75:83.119, P85:84.076, P90:84.725, P95:85.685, P97:86.31, P99:87.488, P999:89.508},
    525: { L:1, M:81.5022, S:0.03257, P01:73.299, P1:75.327, P3:76.51, P5:77.136, P10:78.1, P15:78.751, P25:79.712, P50:81.502, P75:83.293, P85:84.253, P90:84.904, P95:85.869, P97:86.495, P99:87.678, P999:89.705},
    530: { L:1, M:81.6689, S:0.03261, P01:73.439, P1:75.473, P3:76.66, P5:77.288, P10:78.256, P15:78.909, P25:79.873, P50:81.669, P75:83.465, P85:84.429, P90:85.082, P95:86.05, P97:86.678, P99:87.864, P999:89.899},
    535: { L:1, M:81.8348, S:0.03266, P01:73.575, P1:75.617, P3:76.808, P5:77.439, P10:78.41, P15:79.065, P25:80.032, P50:81.835, P75:83.638, P85:84.605, P90:85.26, P95:86.231, P97:86.862, P99:88.052, P999:90.094},
    540: { L:1, M:82, S:0.03271, P01:73.711, P1:75.76, P3:76.955, P5:77.588, P10:78.563, P15:79.22, P25:80.191, P50:82, P75:83.809, P85:84.78, P90:85.437, P95:86.412, P97:87.045, P99:88.24, P999:90.289},
    545: { L:1, M:82.1644, S:0.03276, P01:73.846, P1:75.903, P3:77.102, P5:77.737, P10:78.715, P15:79.375, P25:80.349, P50:82.164, P75:83.98, P85:84.954, P90:85.614, P95:86.592, P97:87.227, P99:88.426, P999:90.482},
    550: { L:1, M:82.3282, S:0.03281, P01:73.981, P1:76.044, P3:77.248, P5:77.885, P10:78.866, P15:79.529, P25:80.506, P50:82.328, P75:84.15, P85:85.128, P90:85.79, P95:86.771, P97:87.409, P99:88.612, P999:90.675},
    555: { L:1, M:82.4912, S:0.03286, P01:74.115, P1:76.185, P3:77.393, P5:78.033, P10:79.017, P15:79.682, P25:80.663, P50:82.491, P75:84.32, P85:85.301, P90:85.965, P95:86.95, P97:87.589, P99:88.797, P999:90.868},
    560: { L:1, M:82.6535, S:0.03291, P01:74.248, P1:76.326, P3:77.538, P5:78.179, P10:79.168, P15:79.834, P25:80.819, P50:82.654, P75:84.488, P85:85.473, P90:86.139, P95:87.128, P97:87.769, P99:88.981, P999:91.059},
    565: { L:1, M:82.8151, S:0.03296, P01:74.38, P1:76.465, P3:77.681, P5:78.325, P10:79.317, P15:79.986, P25:80.974, P50:82.815, P75:84.656, P85:85.644, P90:86.313, P95:87.305, P97:87.949, P99:89.165, P999:91.25},
    570: { L:1, M:82.9759, S:0.03301, P01:74.512, P1:76.604, P3:77.824, P5:78.471, P10:79.466, P15:80.137, P25:81.128, P50:82.976, P75:84.823, P85:85.815, P90:86.486, P95:87.481, P97:88.127, P99:89.348, P999:91.44},
    575: { L:1, M:83.136, S:0.03306, P01:74.643, P1:76.742, P3:77.967, P5:78.615, P10:79.614, P15:80.287, P25:81.282, P50:83.136, P75:84.99, P85:85.985, P90:86.658, P95:87.657, P97:88.305, P99:89.53, P999:91.629},
    580: { L:1, M:83.2955, S:0.03312, P01:74.77, P1:76.878, P3:78.107, P5:78.758, P10:79.76, P15:80.436, P25:81.435, P50:83.296, P75:85.156, P85:86.155, P90:86.831, P95:87.833, P97:88.484, P99:89.713, P999:91.821},
    585: { L:1, M:83.4543, S:0.03317, P01:74.9, P1:77.015, P3:78.248, P5:78.901, P10:79.907, P15:80.585, P25:81.587, P50:83.454, P75:85.321, P85:86.323, P90:87.002, P95:88.008, P97:88.661, P99:89.894, P999:92.009},
    590: { L:1, M:83.6124, S:0.03322, P01:75.029, P1:77.151, P3:78.388, P5:79.044, P10:80.053, P15:80.734, P25:81.739, P50:83.612, P75:85.486, P85:86.491, P90:87.172, P95:88.181, P97:88.836, P99:90.074, P999:92.196},
    595: { L:1, M:83.7698, S:0.03327, P01:75.157, P1:77.286, P3:78.528, P5:79.186, P10:80.198, P15:80.881, P25:81.89, P50:83.77, P75:85.65, P85:86.658, P90:87.342, P95:88.354, P97:89.012, P99:90.253, P999:92.382},
    600: { L:1, M:83.9267, S:0.03333, P01:75.282, P1:77.419, P3:78.666, P5:79.326, P10:80.342, P15:81.028, P25:82.04, P50:83.927, P75:85.813, P85:86.826, P90:87.512, P95:88.528, P97:89.188, P99:90.434, P999:92.571},
    605: { L:1, M:84.0829, S:0.03338, P01:75.41, P1:77.554, P3:78.804, P5:79.466, P10:80.486, P15:81.174, P25:82.19, P50:84.083, P75:85.976, P85:86.992, P90:87.68, P95:88.699, P97:89.362, P99:90.612, P999:92.756},
    610: { L:1, M:84.2385, S:0.03344, P01:75.534, P1:77.685, P3:78.94, P5:79.605, P10:80.628, P15:81.319, P25:82.339, P50:84.239, P75:86.138, P85:87.158, P90:87.849, P95:88.872, P97:89.537, P99:90.792, P999:92.943},
    615: { L:1, M:84.3935, S:0.03349, P01:75.659, P1:77.818, P3:79.078, P5:79.745, P10:80.771, P15:81.464, P25:82.487, P50:84.394, P75:86.3, P85:87.323, P90:88.016, P95:89.042, P97:89.709, P99:90.969, P999:93.128},
    620: { L:1, M:84.5479, S:0.03354, P01:75.785, P1:77.951, P3:79.214, P5:79.884, P10:80.914, P15:81.609, P25:82.635, P50:84.548, P75:86.461, P85:87.487, P90:88.182, P95:89.212, P97:89.881, P99:91.145, P999:93.311},
    625: { L:1, M:84.7017, S:0.0336, P01:75.907, P1:78.081, P3:79.349, P5:80.02, P10:81.054, P15:81.752, P25:82.782, P50:84.702, P75:86.621, P85:87.651, P90:88.349, P95:89.383, P97:90.054, P99:91.322, P999:93.496},
    630: { L:1, M:84.8549, S:0.03365, P01:76.031, P1:78.212, P3:79.485, P5:80.158, P10:81.196, P15:81.896, P25:82.929, P50:84.855, P75:86.781, P85:87.814, P90:88.514, P95:89.552, P97:90.225, P99:91.497, P999:93.679},
    635: { L:1, M:85.0075, S:0.03371, P01:76.152, P1:78.341, P3:79.618, P5:80.294, P10:81.335, P15:82.037, P25:83.075, P50:85.008, P75:86.94, P85:87.978, P90:88.68, P95:89.721, P97:90.397, P99:91.674, P999:93.863},
    640: { L:1, M:85.1594, S:0.03377, P01:76.272, P1:78.469, P3:79.751, P5:80.429, P10:81.474, P15:82.179, P25:83.22, P50:85.159, P75:87.099, P85:88.14, P90:88.845, P95:89.89, P97:90.568, P99:91.85, P999:94.046},
    645: { L:1, M:85.3108, S:0.03382, P01:76.395, P1:78.599, P3:79.884, P5:80.565, P10:81.613, P15:82.32, P25:83.365, P50:85.311, P75:87.257, P85:88.301, P90:89.008, P95:90.057, P97:90.737, P99:92.023, P999:94.227},
    650: { L:1, M:85.4615, S:0.03388, P01:76.514, P1:78.726, P3:80.016, P5:80.699, P10:81.751, P15:82.461, P25:83.509, P50:85.462, P75:87.414, P85:88.462, P90:89.172, P95:90.224, P97:90.907, P99:92.197, P999:94.409},
    655: { L:1, M:85.6117, S:0.03393, P01:76.635, P1:78.854, P3:80.148, P5:80.834, P10:81.889, P15:82.601, P25:83.652, P50:85.612, P75:87.571, P85:88.622, P90:89.334, P95:90.39, P97:91.075, P99:92.369, P999:94.588},
    660: { L:1, M:85.7613, S:0.03399, P01:76.753, P1:78.98, P3:80.279, P5:80.967, P10:82.026, P15:82.74, P25:83.795, P50:85.761, P75:87.727, P85:88.783, P90:89.497, P95:90.556, P97:91.244, P99:92.543, P999:94.769},
    665: { L:1, M:85.9104, S:0.03405, P01:76.871, P1:79.105, P3:80.409, P5:81.099, P10:82.162, P15:82.879, P25:83.937, P50:85.91, P75:87.883, P85:88.942, P90:89.659, P95:90.722, P97:91.412, P99:92.716, P999:94.95},
    670: { L:1, M:86.0589, S:0.0341, P01:76.99, P1:79.232, P3:80.54, P5:81.232, P10:82.298, P15:83.017, P25:84.08, P50:86.059, P75:88.038, P85:89.1, P90:89.82, P95:90.886, P97:91.578, P99:92.886, P999:95.128},
    675: { L:1, M:86.2068, S:0.03416, P01:77.107, P1:79.356, P3:80.668, P5:81.363, P10:82.433, P15:83.155, P25:84.221, P50:86.207, P75:88.193, P85:89.259, P90:89.981, P95:91.051, P97:91.745, P99:93.057, P999:95.307},
    680: { L:1, M:86.3543, S:0.03422, P01:77.223, P1:79.48, P3:80.796, P5:81.494, P10:82.567, P15:83.292, P25:84.361, P50:86.354, P75:88.347, P85:89.417, P90:90.141, P95:91.215, P97:91.912, P99:93.229, P999:95.486},
    685: { L:1, M:86.5012, S:0.03427, P01:77.341, P1:79.605, P3:80.926, P5:81.625, P10:82.702, P15:83.429, P25:84.502, P50:86.501, P75:88.501, P85:89.574, P90:90.3, P95:91.377, P97:92.077, P99:93.397, P999:95.662},
    690: { L:1, M:86.6477, S:0.03433, P01:77.455, P1:79.728, P3:81.053, P5:81.755, P10:82.836, P15:83.565, P25:84.641, P50:86.648, P75:88.654, P85:89.731, P90:90.46, P95:91.541, P97:92.242, P99:93.568, P999:95.84},
    695: { L:1, M:86.7937, S:0.03439, P01:77.57, P1:79.85, P3:81.18, P5:81.884, P10:82.968, P15:83.7, P25:84.78, P50:86.794, P75:88.807, P85:89.887, P90:90.619, P95:91.703, P97:92.408, P99:93.737, P999:96.018},
    700: { L:1, M:86.9392, S:0.03445, P01:77.684, P1:79.972, P3:81.306, P5:82.013, P10:83.101, P15:83.835, P25:84.919, P50:86.939, P75:88.959, P85:90.043, P90:90.778, P95:91.866, P97:92.572, P99:93.907, P999:96.195},
    705: { L:1, M:87.0842, S:0.0345, P01:77.8, P1:80.095, P3:81.434, P5:82.142, P10:83.234, P15:83.97, P25:85.058, P50:87.084, P75:89.111, P85:90.198, P90:90.934, P95:92.026, P97:92.735, P99:94.073, P999:96.369},
    710: { L:1, M:87.2287, S:0.03456, P01:77.913, P1:80.216, P3:81.559, P5:82.27, P10:83.365, P15:84.104, P25:85.195, P50:87.229, P75:89.262, P85:90.353, P90:91.092, P95:92.187, P97:92.899, P99:94.242, P999:96.545},
    715: { L:1, M:87.3727, S:0.03462, P01:78.025, P1:80.336, P3:81.684, P5:82.397, P10:83.496, P15:84.238, P25:85.332, P50:87.373, P75:89.413, P85:90.508, P90:91.249, P95:92.348, P97:93.062, P99:94.41, P999:96.72},
    720: { L:1, M:87.5162, S:0.03467, P01:78.14, P1:80.458, P3:81.81, P5:82.525, P10:83.628, P15:84.371, P25:85.47, P50:87.516, P75:89.563, P85:90.661, P90:91.405, P95:92.507, P97:93.223, P99:94.575, P999:96.893},
    725: { L:1, M:87.6593, S:0.03473, P01:78.251, P1:80.577, P3:81.933, P5:82.652, P10:83.758, P15:84.504, P25:85.606, P50:87.659, P75:89.713, P85:90.815, P90:91.561, P95:92.667, P97:93.385, P99:94.742, P999:97.067},
    726: { L:1, M:87.6878, S:0.03474, P01:78.274, P1:80.601, P3:81.958, P5:82.677, P10:83.784, P15:84.531, P25:85.633, P50:87.688, P75:89.742, P85:90.845, P90:91.592, P95:92.698, P97:93.417, P99:94.774, P999:97.101},
};

export default lhfaBoys;