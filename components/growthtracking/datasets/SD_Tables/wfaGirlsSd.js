const wfaGirlsSd = {
  0: { SD4neg:1.671, SD3neg:2.033, SD2neg:2.395, SD1neg:2.794, SD0:3.232, SD1:3.711, SD2:4.230, SD3:4.793, SD4:5.356},
  5: { SD4neg:1.689, SD3neg:2.053, SD2neg:2.418, SD1neg:2.826, SD0:3.282, SD1:3.789, SD2:4.349, SD3:4.967, SD4:5.585},
  10: { SD4neg:1.791, SD3neg:2.165, SD2neg:2.540, SD1neg:2.960, SD0:3.431, SD1:3.957, SD2:4.540, SD3:5.186, SD4:5.831},
  15: { SD4neg:1.910, SD3neg:2.297, SD2neg:2.683, SD1neg:3.118, SD0:3.606, SD1:4.151, SD2:4.758, SD3:5.431, SD4:6.104},
  20: { SD4neg:2.039, SD3neg:2.439, SD2neg:2.840, SD1neg:3.291, SD0:3.797, SD1:4.363, SD2:4.994, SD3:5.695, SD4:6.397},
  25: { SD4neg:2.167, SD3neg:2.582, SD2neg:2.996, SD1neg:3.463, SD0:3.987, SD1:4.574, SD2:5.229, SD3:5.958, SD4:6.687},
  30: { SD4neg:2.293, SD3neg:2.720, SD2neg:3.148, SD1neg:3.630, SD0:4.172, SD1:4.778, SD2:5.456, SD3:6.212, SD4:6.967},
  35: { SD4neg:2.413, SD3neg:2.853, SD2neg:3.294, SD1neg:3.790, SD0:4.348, SD1:4.973, SD2:5.672, SD3:6.453, SD4:7.233},
  40: { SD4neg:2.527, SD3neg:2.980, SD2neg:3.432, SD1neg:3.942, SD0:4.515, SD1:5.158, SD2:5.878, SD3:6.682, SD4:7.486},
  45: { SD4neg:2.637, SD3neg:3.100, SD2neg:3.564, SD1neg:4.086, SD0:4.674, SD1:5.333, SD2:6.072, SD3:6.898, SD4:7.725},
  50: { SD4neg:2.741, SD3neg:3.215, SD2neg:3.689, SD1neg:4.223, SD0:4.824, SD1:5.500, SD2:6.257, SD3:7.105, SD4:7.952},
  55: { SD4neg:2.840, SD3neg:3.324, SD2neg:3.808, SD1neg:4.354, SD0:4.968, SD1:5.658, SD2:6.433, SD3:7.301, SD4:8.169},
  60: { SD4neg:2.935, SD3neg:3.428, SD2neg:3.922, SD1neg:4.478, SD0:5.105, SD1:5.810, SD2:6.601, SD3:7.488, SD4:8.376},
  65: { SD4neg:3.026, SD3neg:3.528, SD2neg:4.031, SD1neg:4.597, SD0:5.236, SD1:5.955, SD2:6.762, SD3:7.669, SD4:8.575},
  70: { SD4neg:3.113, SD3neg:3.624, SD2neg:4.135, SD1neg:4.712, SD0:5.362, SD1:6.094, SD2:6.917, SD3:7.842, SD4:8.766},
  75: { SD4neg:3.196, SD3neg:3.716, SD2neg:4.235, SD1neg:4.821, SD0:5.482, SD1:6.227, SD2:7.066, SD3:8.008, SD4:8.951},
  80: { SD4neg:3.277, SD3neg:3.804, SD2neg:4.331, SD1neg:4.927, SD0:5.599, SD1:6.356, SD2:7.209, SD3:8.169, SD4:9.128},
  85: { SD4neg:3.354, SD3neg:3.889, SD2neg:4.424, SD1neg:5.028, SD0:5.710, SD1:6.480, SD2:7.347, SD3:8.324, SD4:9.300},
  90: { SD4neg:3.428, SD3neg:3.971, SD2neg:4.513, SD1neg:5.126, SD0:5.818, SD1:6.599, SD2:7.480, SD3:8.473, SD4:9.466},
  95: { SD4neg:3.500, SD3neg:4.050, SD2neg:4.599, SD1neg:5.221, SD0:5.922, SD1:6.715, SD2:7.609, SD3:8.618, SD4:9.627},
  100: { SD4neg:3.570, SD3neg:4.126, SD2neg:4.683, SD1neg:5.312, SD0:6.023, SD1:6.826, SD2:7.734, SD3:8.759, SD4:9.784},
  105: { SD4neg:3.637, SD3neg:4.200, SD2neg:4.763, SD1neg:5.400, SD0:6.120, SD1:6.935, SD2:7.855, SD3:8.895, SD4:9.935},
  110: { SD4neg:3.702, SD3neg:4.271, SD2neg:4.841, SD1neg:5.485, SD0:6.214, SD1:7.039, SD2:7.972, SD3:9.027, SD4:10.082},
  115: { SD4neg:3.764, SD3neg:4.340, SD2neg:4.916, SD1neg:5.568, SD0:6.305, SD1:7.141, SD2:8.086, SD3:9.155, SD4:10.225},
  120: { SD4neg:3.825, SD3neg:4.407, SD2neg:4.988, SD1neg:5.647, SD0:6.394, SD1:7.239, SD2:8.196, SD3:9.280, SD4:10.364},
  125: { SD4neg:3.883, SD3neg:4.471, SD2neg:5.059, SD1neg:5.725, SD0:6.479, SD1:7.334, SD2:8.302, SD3:9.400, SD4:10.498},
  130: { SD4neg:3.940, SD3neg:4.534, SD2neg:5.127, SD1neg:5.799, SD0:6.562, SD1:7.426, SD2:8.406, SD3:9.517, SD4:10.629},
  135: { SD4neg:3.995, SD3neg:4.594, SD2neg:5.193, SD1neg:5.872, SD0:6.642, SD1:7.515, SD2:8.506, SD3:9.631, SD4:10.756},
  140: { SD4neg:4.048, SD3neg:4.652, SD2neg:5.257, SD1neg:5.942, SD0:6.719, SD1:7.602, SD2:8.604, SD3:9.742, SD4:10.880},
  145: { SD4neg:4.100, SD3neg:4.709, SD2neg:5.318, SD1neg:6.010, SD0:6.794, SD1:7.686, SD2:8.698, SD3:9.849, SD4:11.001},
  150: { SD4neg:4.149, SD3neg:4.764, SD2neg:5.378, SD1neg:6.076, SD0:6.867, SD1:7.767, SD2:8.790, SD3:9.954, SD4:11.118},
  155: { SD4neg:4.198, SD3neg:4.817, SD2neg:5.436, SD1neg:6.139, SD0:6.938, SD1:7.846, SD2:8.879, SD3:10.056, SD4:11.232},
  160: { SD4neg:4.245, SD3neg:4.869, SD2neg:5.493, SD1neg:6.201, SD0:7.007, SD1:7.923, SD2:8.967, SD3:10.155, SD4:11.344},
  165: { SD4neg:4.290, SD3neg:4.919, SD2neg:5.548, SD1neg:6.262, SD0:7.074, SD1:7.998, SD2:9.051, SD3:10.252, SD4:11.453},
  170: { SD4neg:4.334, SD3neg:4.968, SD2neg:5.601, SD1neg:6.321, SD0:7.139, SD1:8.072, SD2:9.134, SD3:10.347, SD4:11.560},
  175: { SD4neg:4.377, SD3neg:5.015, SD2neg:5.653, SD1neg:6.378, SD0:7.203, SD1:8.143, SD2:9.215, SD3:10.440, SD4:11.664},
  180: { SD4neg:4.419, SD3neg:5.061, SD2neg:5.703, SD1neg:6.434, SD0:7.265, SD1:8.213, SD2:9.295, SD3:10.531, SD4:11.767},
  185: { SD4neg:4.460, SD3neg:5.106, SD2neg:5.753, SD1neg:6.488, SD0:7.326, SD1:8.281, SD2:9.372, SD3:10.620, SD4:11.868},
  190: { SD4neg:4.500, SD3neg:5.150, SD2neg:5.801, SD1neg:6.541, SD0:7.385, SD1:8.348, SD2:9.448, SD3:10.707, SD4:11.967},
  195: { SD4neg:4.538, SD3neg:5.193, SD2neg:5.848, SD1neg:6.593, SD0:7.443, SD1:8.413, SD2:9.523, SD3:10.793, SD4:12.064},
  200: { SD4neg:4.576, SD3neg:5.235, SD2neg:5.893, SD1neg:6.644, SD0:7.500, SD1:8.477, SD2:9.596, SD3:10.877, SD4:12.159},
  205: { SD4neg:4.613, SD3neg:5.276, SD2neg:5.938, SD1neg:6.693, SD0:7.555, SD1:8.540, SD2:9.668, SD3:10.961, SD4:12.254},
  210: { SD4neg:4.649, SD3neg:5.315, SD2neg:5.982, SD1neg:6.742, SD0:7.609, SD1:8.601, SD2:9.738, SD3:11.042, SD4:12.346},
  215: { SD4neg:4.684, SD3neg:5.354, SD2neg:6.025, SD1neg:6.789, SD0:7.663, SD1:8.662, SD2:9.807, SD3:11.122, SD4:12.437},
  220: { SD4neg:4.718, SD3neg:5.393, SD2neg:6.067, SD1neg:6.836, SD0:7.715, SD1:8.721, SD2:9.875, SD3:11.201, SD4:12.527},
  225: { SD4neg:4.752, SD3neg:5.430, SD2neg:6.108, SD1neg:6.882, SD0:7.766, SD1:8.780, SD2:9.942, SD3:11.279, SD4:12.615},
  230: { SD4neg:4.785, SD3neg:5.467, SD2neg:6.148, SD1neg:6.927, SD0:7.817, SD1:8.837, SD2:10.008, SD3:11.356, SD4:12.703},
  235: { SD4neg:4.817, SD3neg:5.502, SD2neg:6.188, SD1neg:6.971, SD0:7.866, SD1:8.893, SD2:10.073, SD3:11.431, SD4:12.789},
  240: { SD4neg:4.849, SD3neg:5.538, SD2neg:6.227, SD1neg:7.014, SD0:7.915, SD1:8.949, SD2:10.137, SD3:11.506, SD4:12.874},
  245: { SD4neg:4.879, SD3neg:5.572, SD2neg:6.265, SD1neg:7.056, SD0:7.963, SD1:9.003, SD2:10.200, SD3:11.579, SD4:12.958},
  250: { SD4neg:4.910, SD3neg:5.606, SD2neg:6.302, SD1neg:7.098, SD0:8.010, SD1:9.057, SD2:10.262, SD3:11.651, SD4:13.041},
  255: { SD4neg:4.940, SD3neg:5.639, SD2neg:6.339, SD1neg:7.139, SD0:8.056, SD1:9.110, SD2:10.323, SD3:11.723, SD4:13.123},
  260: { SD4neg:4.969, SD3neg:5.672, SD2neg:6.375, SD1neg:7.180, SD0:8.102, SD1:9.162, SD2:10.383, SD3:11.793, SD4:13.204},
  265: { SD4neg:4.998, SD3neg:5.704, SD2neg:6.411, SD1neg:7.219, SD0:8.147, SD1:9.213, SD2:10.442, SD3:11.863, SD4:13.283},
  270: { SD4neg:5.026, SD3neg:5.736, SD2neg:6.446, SD1neg:7.258, SD0:8.191, SD1:9.264, SD2:10.501, SD3:11.932, SD4:13.362},
  275: { SD4neg:5.054, SD3neg:5.767, SD2neg:6.480, SD1neg:7.297, SD0:8.235, SD1:9.314, SD2:10.559, SD3:11.999, SD4:13.440},
  280: { SD4neg:5.081, SD3neg:5.798, SD2neg:6.514, SD1neg:7.335, SD0:8.278, SD1:9.363, SD2:10.616, SD3:12.066, SD4:13.517},
  285: { SD4neg:5.108, SD3neg:5.828, SD2neg:6.548, SD1neg:7.373, SD0:8.320, SD1:9.412, SD2:10.672, SD3:12.133, SD4:13.593},
  290: { SD4neg:5.135, SD3neg:5.858, SD2neg:6.581, SD1neg:7.410, SD0:8.362, SD1:9.460, SD2:10.728, SD3:12.198, SD4:13.668},
  295: { SD4neg:5.161, SD3neg:5.887, SD2neg:6.614, SD1neg:7.446, SD0:8.404, SD1:9.507, SD2:10.783, SD3:12.263, SD4:13.743},
  300: { SD4neg:5.187, SD3neg:5.917, SD2neg:6.646, SD1neg:7.482, SD0:8.444, SD1:9.554, SD2:10.838, SD3:12.327, SD4:13.817},
  305: { SD4neg:5.213, SD3neg:5.945, SD2neg:6.678, SD1neg:7.518, SD0:8.485, SD1:9.601, SD2:10.892, SD3:12.391, SD4:13.890},
  310: { SD4neg:5.238, SD3neg:5.974, SD2neg:6.710, SD1neg:7.554, SD0:8.525, SD1:9.647, SD2:10.945, SD3:12.454, SD4:13.962},
  315: { SD4neg:5.264, SD3neg:6.002, SD2neg:6.741, SD1neg:7.589, SD0:8.565, SD1:9.692, SD2:10.998, SD3:12.516, SD4:14.034},
  320: { SD4neg:5.289, SD3neg:6.030, SD2neg:6.772, SD1neg:7.624, SD0:8.604, SD1:9.737, SD2:11.051, SD3:12.578, SD4:14.105},
  325: { SD4neg:5.313, SD3neg:6.058, SD2neg:6.803, SD1neg:7.658, SD0:8.644, SD1:9.782, SD2:11.103, SD3:12.639, SD4:14.176},
  330: { SD4neg:5.338, SD3neg:6.085, SD2neg:6.833, SD1neg:7.692, SD0:8.682, SD1:9.827, SD2:11.154, SD3:12.700, SD4:14.246},
  335: { SD4neg:5.362, SD3neg:6.113, SD2neg:6.863, SD1neg:7.726, SD0:8.721, SD1:9.871, SD2:11.206, SD3:12.761, SD4:14.315},
  340: { SD4neg:5.386, SD3neg:6.140, SD2neg:6.893, SD1neg:7.760, SD0:8.759, SD1:9.915, SD2:11.257, SD3:12.820, SD4:14.384},
  345: { SD4neg:5.410, SD3neg:6.167, SD2neg:6.923, SD1neg:7.793, SD0:8.797, SD1:9.958, SD2:11.307, SD3:12.880, SD4:14.453},
  350: { SD4neg:5.434, SD3neg:6.193, SD2neg:6.953, SD1neg:7.826, SD0:8.834, SD1:10.001, SD2:11.357, SD3:12.939, SD4:14.521},
  355: { SD4neg:5.458, SD3neg:6.220, SD2neg:6.983, SD1neg:7.860, SD0:8.872, SD1:10.044, SD2:11.407, SD3:12.997, SD4:14.588},
  360: { SD4neg:5.482, SD3neg:6.247, SD2neg:7.012, SD1neg:7.893, SD0:8.909, SD1:10.087, SD2:11.457, SD3:13.056, SD4:14.655},
  365: { SD4neg:5.505, SD3neg:6.273, SD2neg:7.041, SD1neg:7.925, SD0:8.946, SD1:10.129, SD2:11.506, SD3:13.114, SD4:14.721},
  370: { SD4neg:5.528, SD3neg:6.299, SD2neg:7.070, SD1neg:7.958, SD0:8.983, SD1:10.172, SD2:11.555, SD3:13.171, SD4:14.788},
  375: { SD4neg:5.552, SD3neg:6.325, SD2neg:7.099, SD1neg:7.990, SD0:9.020, SD1:10.214, SD2:11.604, SD3:13.229, SD4:14.853},
  380: { SD4neg:5.575, SD3neg:6.351, SD2neg:7.128, SD1neg:8.022, SD0:9.056, SD1:10.256, SD2:11.652, SD3:13.286, SD4:14.919},
  385: { SD4neg:5.598, SD3neg:6.377, SD2neg:7.157, SD1neg:8.055, SD0:9.093, SD1:10.297, SD2:11.701, SD3:13.342, SD4:14.984},
  390: { SD4neg:5.621, SD3neg:6.403, SD2neg:7.185, SD1neg:8.087, SD0:9.129, SD1:10.339, SD2:11.749, SD3:13.399, SD4:15.049},
  395: { SD4neg:5.644, SD3neg:6.429, SD2neg:7.214, SD1neg:8.119, SD0:9.165, SD1:10.380, SD2:11.796, SD3:13.455, SD4:15.113},
  400: { SD4neg:5.667, SD3neg:6.455, SD2neg:7.242, SD1neg:8.150, SD0:9.201, SD1:10.421, SD2:11.844, SD3:13.511, SD4:15.177},
  405: { SD4neg:5.690, SD3neg:6.480, SD2neg:7.271, SD1neg:8.182, SD0:9.237, SD1:10.462, SD2:11.891, SD3:13.566, SD4:15.241},
  410: { SD4neg:5.712, SD3neg:6.506, SD2neg:7.299, SD1neg:8.214, SD0:9.272, SD1:10.503, SD2:11.939, SD3:13.622, SD4:15.305},
  415: { SD4neg:5.735, SD3neg:6.531, SD2neg:7.327, SD1neg:8.245, SD0:9.308, SD1:10.543, SD2:11.986, SD3:13.676, SD4:15.367},
  420: { SD4neg:5.758, SD3neg:6.557, SD2neg:7.355, SD1neg:8.277, SD0:9.344, SD1:10.584, SD2:12.032, SD3:13.731, SD4:15.430},
  425: { SD4neg:5.780, SD3neg:6.582, SD2neg:7.383, SD1neg:8.308, SD0:9.379, SD1:10.624, SD2:12.079, SD3:13.786, SD4:15.493},
  430: { SD4neg:5.803, SD3neg:6.607, SD2neg:7.411, SD1neg:8.339, SD0:9.414, SD1:10.665, SD2:12.126, SD3:13.841, SD4:15.556},
  435: { SD4neg:5.825, SD3neg:6.632, SD2neg:7.439, SD1neg:8.371, SD0:9.450, SD1:10.705, SD2:12.172, SD3:13.895, SD4:15.618},
  440: { SD4neg:5.848, SD3neg:6.658, SD2neg:7.467, SD1neg:8.402, SD0:9.485, SD1:10.745, SD2:12.219, SD3:13.949, SD4:15.680},
  445: { SD4neg:5.870, SD3neg:6.683, SD2neg:7.495, SD1neg:8.433, SD0:9.520, SD1:10.785, SD2:12.265, SD3:14.003, SD4:15.741},
  450: { SD4neg:5.893, SD3neg:6.708, SD2neg:7.523, SD1neg:8.464, SD0:9.555, SD1:10.825, SD2:12.310, SD3:14.056, SD4:15.802},
  455: { SD4neg:5.915, SD3neg:6.733, SD2neg:7.551, SD1neg:8.495, SD0:9.590, SD1:10.865, SD2:12.356, SD3:14.110, SD4:15.863},
  460: { SD4neg:5.938, SD3neg:6.758, SD2neg:7.578, SD1neg:8.526, SD0:9.625, SD1:10.905, SD2:12.402, SD3:14.163, SD4:15.925},
  465: { SD4neg:5.960, SD3neg:6.783, SD2neg:7.606, SD1neg:8.557, SD0:9.660, SD1:10.944, SD2:12.448, SD3:14.217, SD4:15.985},
  470: { SD4neg:5.982, SD3neg:6.808, SD2neg:7.634, SD1neg:8.588, SD0:9.694, SD1:10.984, SD2:12.494, SD3:14.270, SD4:16.046},
  475: { SD4neg:6.005, SD3neg:6.833, SD2neg:7.661, SD1neg:8.619, SD0:9.729, SD1:11.023, SD2:12.539, SD3:14.323, SD4:16.107},
  480: { SD4neg:6.027, SD3neg:6.858, SD2neg:7.689, SD1neg:8.649, SD0:9.764, SD1:11.063, SD2:12.585, SD3:14.376, SD4:16.168},
  485: { SD4neg:6.049, SD3neg:6.883, SD2neg:7.717, SD1neg:8.680, SD0:9.798, SD1:11.102, SD2:12.630, SD3:14.429, SD4:16.228},
  490: { SD4neg:6.071, SD3neg:6.908, SD2neg:7.744, SD1neg:8.711, SD0:9.833, SD1:11.142, SD2:12.675, SD3:14.482, SD4:16.288},
  495: { SD4neg:6.094, SD3neg:6.933, SD2neg:7.772, SD1neg:8.742, SD0:9.868, SD1:11.181, SD2:12.721, SD3:14.534, SD4:16.348},
  500: { SD4neg:6.116, SD3neg:6.957, SD2neg:7.799, SD1neg:8.772, SD0:9.902, SD1:11.221, SD2:12.766, SD3:14.587, SD4:16.409},
  505: { SD4neg:6.138, SD3neg:6.982, SD2neg:7.827, SD1neg:8.803, SD0:9.937, SD1:11.260, SD2:12.811, SD3:14.640, SD4:16.469},
  510: { SD4neg:6.160, SD3neg:7.007, SD2neg:7.854, SD1neg:8.833, SD0:9.971, SD1:11.299, SD2:12.856, SD3:14.693, SD4:16.529},
  515: { SD4neg:6.182, SD3neg:7.032, SD2neg:7.881, SD1neg:8.864, SD0:10.006, SD1:11.338, SD2:12.902, SD3:14.745, SD4:16.589},
  520: { SD4neg:6.204, SD3neg:7.056, SD2neg:7.909, SD1neg:8.895, SD0:10.040, SD1:11.378, SD2:12.947, SD3:14.798, SD4:16.649},
  525: { SD4neg:6.226, SD3neg:7.081, SD2neg:7.936, SD1neg:8.925, SD0:10.075, SD1:11.417, SD2:12.992, SD3:14.850, SD4:16.708},
  530: { SD4neg:6.247, SD3neg:7.105, SD2neg:7.963, SD1neg:8.956, SD0:10.109, SD1:11.456, SD2:13.037, SD3:14.903, SD4:16.768},
  535: { SD4neg:6.269, SD3neg:7.130, SD2neg:7.990, SD1neg:8.986, SD0:10.143, SD1:11.495, SD2:13.082, SD3:14.955, SD4:16.828},
  540: { SD4neg:6.291, SD3neg:7.154, SD2neg:8.018, SD1neg:9.016, SD0:10.178, SD1:11.534, SD2:13.127, SD3:15.007, SD4:16.887},
  545: { SD4neg:6.313, SD3neg:7.179, SD2neg:8.045, SD1neg:9.047, SD0:10.212, SD1:11.573, SD2:13.172, SD3:15.059, SD4:16.947},
  550: { SD4neg:6.335, SD3neg:7.203, SD2neg:8.072, SD1neg:9.077, SD0:10.246, SD1:11.612, SD2:13.217, SD3:15.112, SD4:17.007},
  555: { SD4neg:6.356, SD3neg:7.227, SD2neg:8.099, SD1neg:9.107, SD0:10.280, SD1:11.651, SD2:13.261, SD3:15.164, SD4:17.067},
  560: { SD4neg:6.378, SD3neg:7.252, SD2neg:8.126, SD1neg:9.138, SD0:10.314, SD1:11.690, SD2:13.306, SD3:15.216, SD4:17.125},
  565: { SD4neg:6.400, SD3neg:7.276, SD2neg:8.153, SD1neg:9.168, SD0:10.349, SD1:11.729, SD2:13.351, SD3:15.268, SD4:17.185},
  570: { SD4neg:6.421, SD3neg:7.301, SD2neg:8.180, SD1neg:9.198, SD0:10.383, SD1:11.768, SD2:13.396, SD3:15.320, SD4:17.245},
  575: { SD4neg:6.443, SD3neg:7.325, SD2neg:8.207, SD1neg:9.228, SD0:10.417, SD1:11.807, SD2:13.440, SD3:15.372, SD4:17.304},
  580: { SD4neg:6.464, SD3neg:7.349, SD2neg:8.234, SD1neg:9.258, SD0:10.451, SD1:11.845, SD2:13.485, SD3:15.425, SD4:17.364},
  585: { SD4neg:6.485, SD3neg:7.373, SD2neg:8.261, SD1neg:9.289, SD0:10.485, SD1:11.884, SD2:13.530, SD3:15.477, SD4:17.423},
  590: { SD4neg:6.507, SD3neg:7.397, SD2neg:8.287, SD1neg:9.319, SD0:10.519, SD1:11.923, SD2:13.575, SD3:15.529, SD4:17.483},
  595: { SD4neg:6.528, SD3neg:7.421, SD2neg:8.314, SD1neg:9.349, SD0:10.553, SD1:11.962, SD2:13.619, SD3:15.580, SD4:17.542},
  600: { SD4neg:6.549, SD3neg:7.445, SD2neg:8.341, SD1neg:9.379, SD0:10.587, SD1:12.001, SD2:13.664, SD3:15.633, SD4:17.602},
  605: { SD4neg:6.571, SD3neg:7.469, SD2neg:8.368, SD1neg:9.409, SD0:10.621, SD1:12.039, SD2:13.709, SD3:15.685, SD4:17.661},
  610: { SD4neg:6.592, SD3neg:7.493, SD2neg:8.394, SD1neg:9.439, SD0:10.655, SD1:12.078, SD2:13.754, SD3:15.737, SD4:17.721},
  615: { SD4neg:6.613, SD3neg:7.517, SD2neg:8.421, SD1neg:9.469, SD0:10.689, SD1:12.117, SD2:13.798, SD3:15.790, SD4:17.781},
  620: { SD4neg:6.634, SD3neg:7.541, SD2neg:8.448, SD1neg:9.499, SD0:10.723, SD1:12.156, SD2:13.843, SD3:15.841, SD4:17.840},
  625: { SD4neg:6.656, SD3neg:7.565, SD2neg:8.475, SD1neg:9.529, SD0:10.757, SD1:12.195, SD2:13.888, SD3:15.894, SD4:17.900},
  630: { SD4neg:6.677, SD3neg:7.589, SD2neg:8.501, SD1neg:9.559, SD0:10.791, SD1:12.234, SD2:13.933, SD3:15.946, SD4:17.960},
  635: { SD4neg:6.698, SD3neg:7.613, SD2neg:8.528, SD1neg:9.589, SD0:10.825, SD1:12.273, SD2:13.978, SD3:15.999, SD4:18.020},
  640: { SD4neg:6.719, SD3neg:7.637, SD2neg:8.555, SD1neg:9.619, SD0:10.859, SD1:12.312, SD2:14.023, SD3:16.052, SD4:18.080},
  645: { SD4neg:6.740, SD3neg:7.660, SD2neg:8.581, SD1neg:9.649, SD0:10.893, SD1:12.350, SD2:14.068, SD3:16.104, SD4:18.140},
  650: { SD4neg:6.761, SD3neg:7.684, SD2neg:8.608, SD1neg:9.679, SD0:10.927, SD1:12.389, SD2:14.113, SD3:16.156, SD4:18.200},
  655: { SD4neg:6.782, SD3neg:7.708, SD2neg:8.634, SD1neg:9.709, SD0:10.961, SD1:12.428, SD2:14.158, SD3:16.209, SD4:18.261},
  660: { SD4neg:6.803, SD3neg:7.732, SD2neg:8.661, SD1neg:9.739, SD0:10.995, SD1:12.467, SD2:14.203, SD3:16.262, SD4:18.320},
  665: { SD4neg:6.824, SD3neg:7.756, SD2neg:8.688, SD1neg:9.769, SD0:11.029, SD1:12.507, SD2:14.248, SD3:16.315, SD4:18.381},
  670: { SD4neg:6.844, SD3neg:7.779, SD2neg:8.714, SD1neg:9.799, SD0:11.063, SD1:12.546, SD2:14.294, SD3:16.368, SD4:18.442},
  675: { SD4neg:6.865, SD3neg:7.803, SD2neg:8.741, SD1neg:9.829, SD0:11.098, SD1:12.585, SD2:14.339, SD3:16.420, SD4:18.502},
  680: { SD4neg:6.886, SD3neg:7.827, SD2neg:8.768, SD1neg:9.859, SD0:11.132, SD1:12.624, SD2:14.384, SD3:16.474, SD4:18.563},
  685: { SD4neg:6.907, SD3neg:7.851, SD2neg:8.794, SD1neg:9.889, SD0:11.166, SD1:12.663, SD2:14.430, SD3:16.527, SD4:18.624},
  690: { SD4neg:6.928, SD3neg:7.874, SD2neg:8.821, SD1neg:9.919, SD0:11.200, SD1:12.702, SD2:14.475, SD3:16.580, SD4:18.685},
  695: { SD4neg:6.949, SD3neg:7.898, SD2neg:8.847, SD1neg:9.949, SD0:11.234, SD1:12.742, SD2:14.521, SD3:16.634, SD4:18.747},
  700: { SD4neg:6.969, SD3neg:7.922, SD2neg:8.874, SD1neg:9.979, SD0:11.268, SD1:12.781, SD2:14.566, SD3:16.687, SD4:18.807},
  705: { SD4neg:6.990, SD3neg:7.945, SD2neg:8.900, SD1neg:10.009, SD0:11.303, SD1:12.820, SD2:14.612, SD3:16.740, SD4:18.868},
  710: { SD4neg:7.011, SD3neg:7.969, SD2neg:8.927, SD1neg:10.039, SD0:11.337, SD1:12.860, SD2:14.657, SD3:16.793, SD4:18.929},
  715: { SD4neg:7.032, SD3neg:7.993, SD2neg:8.954, SD1neg:10.069, SD0:11.371, SD1:12.899, SD2:14.703, SD3:16.847, SD4:18.991},
  720: { SD4neg:7.052, SD3neg:8.016, SD2neg:8.980, SD1neg:10.099, SD0:11.406, SD1:12.939, SD2:14.749, SD3:16.901, SD4:19.052},
  725: { SD4neg:7.073, SD3neg:8.040, SD2neg:9.007, SD1neg:10.129, SD0:11.440, SD1:12.978, SD2:14.795, SD3:16.954, SD4:19.114},
  726: { SD4neg:7.077, SD3neg:8.045, SD2neg:9.012, SD1neg:10.135, SD0:11.447, SD1:12.986, SD2:14.804, SD3:16.965, SD4:19.127},
}

export default wfaGirlsSd;