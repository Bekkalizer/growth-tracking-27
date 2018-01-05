const ssfaBoys = {
    91: { L:-0.303, M:7.692, S:0.17019, P01:4.722, P1:5.292, P3:5.667, P5:5.88, P10:6.228, P15:6.478, P25:6.871, P50:7.692, P75:8.645, P85:9.221, P90:9.639, P95:10.306, P97:10.771, P99:11.728, P999:13.641},
    96: { L:-0.3072, M:7.6589, S:0.17032, P01:4.702, P1:5.27, P3:5.643, P5:5.854, P10:6.2, P15:6.449, P25:6.841, P50:7.659, P75:8.609, P85:9.183, P90:9.6, P95:10.266, P97:10.73, P99:11.686, P999:13.599},
    101: { L:-0.3114, M:7.6263, S:0.17045, P01:4.683, P1:5.247, P3:5.618, P5:5.829, P10:6.174, P15:6.421, P25:6.812, P50:7.626, P75:8.574, P85:9.146, P90:9.562, P95:10.226, P97:10.69, P99:11.644, P999:13.557},
    106: { L:-0.3154, M:7.5943, S:0.17058, P01:4.663, P1:5.225, P3:5.595, P5:5.804, P10:6.147, P15:6.394, P25:6.783, P50:7.594, P75:8.539, P85:9.109, P90:9.525, P95:10.188, P97:10.651, P99:11.604, P999:13.516},
    111: { L:-0.3194, M:7.5628, S:0.1707, P01:4.645, P1:5.204, P3:5.571, P5:5.78, P10:6.121, P15:6.367, P25:6.754, P50:7.563, P75:8.504, P85:9.073, P90:9.488, P95:10.149, P97:10.612, P99:11.564, P999:13.476},
    116: { L:-0.3234, M:7.5318, S:0.17083, P01:4.626, P1:5.182, P3:5.548, P5:5.756, P10:6.096, P15:6.341, P25:6.726, P50:7.532, P75:8.47, P85:9.038, P90:9.452, P95:10.112, P97:10.574, P99:11.525, P999:13.437},
    121: { L:-0.3272, M:7.5013, S:0.17095, P01:4.608, P1:5.161, P3:5.525, P5:5.732, P10:6.071, P15:6.314, P25:6.699, P50:7.501, P75:8.437, P85:9.003, P90:9.416, P95:10.075, P97:10.536, P99:11.486, P999:13.397},
    126: { L:-0.3311, M:7.4713, S:0.17107, P01:4.59, P1:5.141, P3:5.503, P5:5.709, P10:6.046, P15:6.289, P25:6.671, P50:7.471, P75:8.404, P85:8.969, P90:9.381, P95:10.039, P97:10.499, P99:11.448, P999:13.359},
    131: { L:-0.3348, M:7.4417, S:0.17118, P01:4.573, P1:5.121, P3:5.481, P5:5.686, P10:6.022, P15:6.264, P25:6.645, P50:7.442, P75:8.372, P85:8.935, P90:9.346, P95:10.002, P97:10.462, P99:11.41, P999:13.321},
    136: { L:-0.3386, M:7.4125, S:0.1713, P01:4.555, P1:5.101, P3:5.46, P5:5.664, P10:5.998, P15:6.239, P25:6.618, P50:7.413, P75:8.34, P85:8.902, P90:9.312, P95:9.967, P97:10.426, P99:11.373, P999:13.284},
    141: { L:-0.3422, M:7.3837, S:0.17142, P01:4.538, P1:5.081, P3:5.438, P5:5.641, P10:5.974, P15:6.214, P25:6.592, P50:7.384, P75:8.308, P85:8.869, P90:9.278, P95:9.932, P97:10.391, P99:11.336, P999:13.247},
    146: { L:-0.3458, M:7.3553, S:0.17153, P01:4.521, P1:5.061, P3:5.417, P5:5.619, P10:5.951, P15:6.19, P25:6.566, P50:7.355, P75:8.277, P85:8.837, P90:9.245, P95:9.898, P97:10.355, P99:11.3, P999:13.21},
    151: { L:-0.3494, M:7.3273, S:0.17164, P01:4.504, P1:5.042, P3:5.396, P5:5.598, P10:5.928, P15:6.166, P25:6.541, P50:7.327, P75:8.246, P85:8.805, P90:9.212, P95:9.864, P97:10.32, P99:11.264, P999:13.174},
    156: { L:-0.353, M:7.2997, S:0.17175, P01:4.488, P1:5.023, P3:5.376, P5:5.576, P10:5.905, P15:6.142, P25:6.516, P50:7.3, P75:8.216, P85:8.773, P90:9.179, P95:9.83, P97:10.286, P99:11.229, P999:13.138},
    161: { L:-0.3565, M:7.2724, S:0.17186, P01:4.471, P1:5.004, P3:5.356, P5:5.555, P10:5.883, P15:6.119, P25:6.492, P50:7.272, P75:8.186, P85:8.742, P90:9.147, P95:9.797, P97:10.252, P99:11.194, P999:13.103},
    166: { L:-0.3599, M:7.2455, S:0.17197, P01:4.455, P1:4.986, P3:5.336, P5:5.535, P10:5.861, P15:6.096, P25:6.467, P50:7.246, P75:8.157, P85:8.711, P90:9.116, P95:9.764, P97:10.219, P99:11.16, P999:13.069},
    171: { L:-0.3634, M:7.219, S:0.17207, P01:4.44, P1:4.968, P3:5.316, P5:5.514, P10:5.839, P15:6.073, P25:6.443, P50:7.219, P75:8.128, P85:8.681, P90:9.085, P95:9.732, P97:10.186, P99:11.126, P999:13.034},
    176: { L:-0.3668, M:7.1929, S:0.17218, P01:4.424, P1:4.95, P3:5.297, P5:5.494, P10:5.818, P15:6.051, P25:6.42, P50:7.193, P75:8.099, P85:8.651, P90:9.054, P95:9.7, P97:10.154, P99:11.093, P999:13.001},
    181: { L:-0.3701, M:7.1671, S:0.17228, P01:4.409, P1:4.932, P3:5.278, P5:5.474, P10:5.797, P15:6.029, P25:6.396, P50:7.167, P75:8.071, P85:8.621, P90:9.023, P95:9.668, P97:10.121, P99:11.06, P999:12.967},
    186: { L:-0.3734, M:7.1417, S:0.17239, P01:4.393, P1:4.915, P3:5.259, P5:5.454, P10:5.776, P15:6.007, P25:6.373, P50:7.142, P75:8.043, P85:8.592, P90:8.994, P95:9.638, P97:10.09, P99:11.028, P999:12.935},
    191: { L:-0.3767, M:7.1166, S:0.17249, P01:4.378, P1:4.898, P3:5.24, P5:5.435, P10:5.755, P15:5.986, P25:6.351, P50:7.117, P75:8.016, P85:8.563, P90:8.964, P95:9.607, P97:10.059, P99:10.995, P999:12.903},
    196: { L:-0.38, M:7.0919, S:0.17259, P01:4.364, P1:4.881, P3:5.222, P5:5.416, P10:5.735, P15:5.965, P25:6.328, P50:7.092, P75:7.989, P85:8.535, P90:8.935, P95:9.577, P97:10.028, P99:10.964, P999:12.871},
    201: { L:-0.3832, M:7.0676, S:0.17269, P01:4.349, P1:4.864, P3:5.204, P5:5.397, P10:5.715, P15:5.944, P25:6.306, P50:7.068, P75:7.962, P85:8.507, P90:8.907, P95:9.547, P97:9.998, P99:10.933, P999:12.84},
    206: { L:-0.3864, M:7.0436, S:0.17279, P01:4.335, P1:4.848, P3:5.186, P5:5.379, P10:5.695, P15:5.924, P25:6.285, P50:7.044, P75:7.936, P85:8.48, P90:8.878, P95:9.518, P97:9.968, P99:10.902, P999:12.809},
    211: { L:-0.3896, M:7.0201, S:0.17289, P01:4.321, P1:4.831, P3:5.169, P5:5.361, P10:5.676, P15:5.904, P25:6.263, P50:7.02, P75:7.91, P85:8.453, P90:8.851, P95:9.489, P97:9.939, P99:10.872, P999:12.779},
    216: { L:-0.3928, M:6.9968, S:0.17299, P01:4.307, P1:4.815, P3:5.151, P5:5.343, P10:5.657, P15:5.884, P25:6.242, P50:6.997, P75:7.884, P85:8.426, P90:8.823, P95:9.461, P97:9.91, P99:10.843, P999:12.75},
    221: { L:-0.3959, M:6.9739, S:0.17309, P01:4.293, P1:4.8, P3:5.134, P5:5.325, P10:5.638, P15:5.864, P25:6.222, P50:6.974, P75:7.859, P85:8.4, P90:8.796, P95:9.433, P97:9.882, P99:10.814, P999:12.721},
    226: { L:-0.399, M:6.9514, S:0.17319, P01:4.28, P1:4.784, P3:5.118, P5:5.308, P10:5.62, P15:5.845, P25:6.201, P50:6.951, P75:7.835, P85:8.375, P90:8.77, P95:9.406, P97:9.854, P99:10.785, P999:12.692},
    231: { L:-0.4021, M:6.9292, S:0.17328, P01:4.266, P1:4.769, P3:5.101, P5:5.29, P10:5.602, P15:5.826, P25:6.181, P50:6.929, P75:7.81, P85:8.349, P90:8.744, P95:9.379, P97:9.826, P99:10.757, P999:12.664},
    236: { L:-0.4051, M:6.9074, S:0.17338, P01:4.253, P1:4.754, P3:5.085, P5:5.274, P10:5.584, P15:5.807, P25:6.162, P50:6.907, P75:7.787, P85:8.324, P90:8.718, P95:9.352, P97:9.799, P99:10.729, P999:12.637},
    241: { L:-0.4082, M:6.8859, S:0.17347, P01:4.241, P1:4.739, P3:5.069, P5:5.257, P10:5.566, P15:5.789, P25:6.142, P50:6.886, P75:7.763, P85:8.3, P90:8.693, P95:9.326, P97:9.773, P99:10.702, P999:12.609},
    246: { L:-0.4112, M:6.8648, S:0.17356, P01:4.228, P1:4.725, P3:5.054, P5:5.241, P10:5.549, P15:5.771, P25:6.123, P50:6.865, P75:7.74, P85:8.275, P90:8.668, P95:9.301, P97:9.747, P99:10.675, P999:12.583},
    251: { L:-0.4142, M:6.844, S:0.17366, P01:4.216, P1:4.711, P3:5.038, P5:5.225, P10:5.532, P15:5.753, P25:6.104, P50:6.844, P75:7.717, P85:8.252, P90:8.644, P95:9.276, P97:9.721, P99:10.649, P999:12.557},
    256: { L:-0.4172, M:6.8236, S:0.17375, P01:4.203, P1:4.697, P3:5.023, P5:5.209, P10:5.515, P15:5.736, P25:6.086, P50:6.824, P75:7.695, P85:8.228, P90:8.62, P95:9.251, P97:9.696, P99:10.623, P999:12.532},
    261: { L:-0.4201, M:6.8034, S:0.17384, P01:4.191, P1:4.683, P3:5.008, P5:5.193, P10:5.498, P15:5.719, P25:6.068, P50:6.803, P75:7.673, P85:8.205, P90:8.596, P95:9.226, P97:9.671, P99:10.598, P999:12.507},
    266: { L:-0.423, M:6.7837, S:0.17393, P01:4.18, P1:4.669, P3:4.993, P5:5.178, P10:5.482, P15:5.702, P25:6.05, P50:6.784, P75:7.651, P85:8.183, P90:8.573, P95:9.202, P97:9.647, P99:10.573, P999:12.482},
    271: { L:-0.4259, M:6.7642, S:0.17402, P01:4.168, P1:4.656, P3:4.979, P5:5.163, P10:5.466, P15:5.685, P25:6.032, P50:6.764, P75:7.63, P85:8.161, P90:8.55, P95:9.179, P97:9.623, P99:10.549, P999:12.458},
    276: { L:-0.4288, M:6.7451, S:0.17411, P01:4.157, P1:4.643, P3:4.965, P5:5.148, P10:5.451, P15:5.669, P25:6.015, P50:6.745, P75:7.609, P85:8.139, P90:8.528, P95:9.156, P97:9.599, P99:10.525, P999:12.435},
    281: { L:-0.4317, M:6.7263, S:0.1742, P01:4.145, P1:4.63, P3:4.951, P5:5.134, P10:5.435, P15:5.653, P25:5.998, P50:6.726, P75:7.588, P85:8.117, P90:8.506, P95:9.133, P97:9.576, P99:10.501, P999:12.412},
    286: { L:-0.4346, M:6.7079, S:0.17429, P01:4.134, P1:4.617, P3:4.937, P5:5.12, P10:5.42, P15:5.637, P25:5.981, P50:6.708, P75:7.568, P85:8.096, P90:8.485, P95:9.111, P97:9.554, P99:10.478, P999:12.39},
    291: { L:-0.4374, M:6.6898, S:0.17438, P01:4.124, P1:4.605, P3:4.924, P5:5.106, P10:5.405, P15:5.622, P25:5.965, P50:6.69, P75:7.548, P85:8.076, P90:8.463, P95:9.089, P97:9.532, P99:10.456, P999:12.368},
    296: { L:-0.4402, M:6.6719, S:0.17447, P01:4.113, P1:4.593, P3:4.911, P5:5.092, P10:5.391, P15:5.606, P25:5.949, P50:6.672, P75:7.529, P85:8.055, P90:8.443, P95:9.067, P97:9.51, P99:10.434, P999:12.347},
    301: { L:-0.443, M:6.6544, S:0.17456, P01:4.102, P1:4.581, P3:4.898, P5:5.078, P10:5.376, P15:5.591, P25:5.933, P50:6.654, P75:7.51, P85:8.035, P90:8.422, P95:9.046, P97:9.488, P99:10.412, P999:12.326},
    306: { L:-0.4458, M:6.6373, S:0.17464, P01:4.092, P1:4.569, P3:4.885, P5:5.065, P10:5.362, P15:5.577, P25:5.917, P50:6.637, P75:7.491, P85:8.016, P90:8.402, P95:9.026, P97:9.467, P99:10.391, P999:12.306},
    311: { L:-0.4486, M:6.6204, S:0.17473, P01:4.082, P1:4.557, P3:4.872, P5:5.052, P10:5.348, P15:5.562, P25:5.902, P50:6.62, P75:7.473, P85:7.997, P90:8.382, P95:9.006, P97:9.447, P99:10.37, P999:12.286},
    316: { L:-0.4514, M:6.6038, S:0.17482, P01:4.072, P1:4.546, P3:4.86, P5:5.039, P10:5.335, P15:5.548, P25:5.887, P50:6.604, P75:7.454, P85:7.978, P90:8.363, P95:8.986, P97:9.427, P99:10.35, P999:12.267},
    321: { L:-0.4541, M:6.5876, S:0.1749, P01:4.063, P1:4.535, P3:4.848, P5:5.027, P10:5.321, P15:5.534, P25:5.872, P50:6.588, P75:7.437, P85:7.959, P90:8.344, P95:8.966, P97:9.407, P99:10.33, P999:12.248},
    326: { L:-0.4568, M:6.5716, S:0.17499, P01:4.053, P1:4.524, P3:4.836, P5:5.015, P10:5.308, P15:5.521, P25:5.858, P50:6.572, P75:7.419, P85:7.941, P90:8.326, P95:8.947, P97:9.388, P99:10.31, P999:12.229},
    331: { L:-0.4595, M:6.5559, S:0.17507, P01:4.044, P1:4.513, P3:4.825, P5:5.002, P10:5.295, P15:5.507, P25:5.844, P50:6.556, P75:7.402, P85:7.923, P90:8.307, P95:8.929, P97:9.369, P99:10.291, P999:12.211},
    336: { L:-0.4622, M:6.5406, S:0.17516, P01:4.035, P1:4.503, P3:4.813, P5:4.991, P10:5.283, P15:5.494, P25:5.83, P50:6.541, P75:7.386, P85:7.906, P90:8.29, P95:8.91, P97:9.35, P99:10.273, P999:12.194},
    341: { L:-0.4649, M:6.5255, S:0.17524, P01:4.026, P1:4.492, P3:4.802, P5:4.979, P10:5.27, P15:5.481, P25:5.816, P50:6.526, P75:7.369, P85:7.889, P90:8.272, P95:8.892, P97:9.332, P99:10.255, P999:12.177},
    346: { L:-0.4676, M:6.5107, S:0.17532, P01:4.017, P1:4.482, P3:4.791, P5:4.968, P10:5.258, P15:5.469, P25:5.803, P50:6.511, P75:7.353, P85:7.872, P90:8.255, P95:8.875, P97:9.314, P99:10.237, P999:12.161},
    351: { L:-0.4702, M:6.4961, S:0.17541, P01:4.008, P1:4.472, P3:4.78, P5:4.956, P10:5.246, P15:5.456, P25:5.79, P50:6.496, P75:7.337, P85:7.856, P90:8.238, P95:8.858, P97:9.297, P99:10.219, P999:12.145},
    356: { L:-0.4729, M:6.4819, S:0.17549, P01:4, P1:4.463, P3:4.77, P5:4.945, P10:5.235, P15:5.444, P25:5.777, P50:6.482, P75:7.322, P85:7.84, P90:8.222, P95:8.841, P97:9.28, P99:10.202, P999:12.129},
    361: { L:-0.4755, M:6.4679, S:0.17557, P01:3.992, P1:4.453, P3:4.759, P5:4.934, P10:5.223, P15:5.432, P25:5.764, P50:6.468, P75:7.306, P85:7.824, P90:8.206, P95:8.824, P97:9.263, P99:10.186, P999:12.114},
    366: { L:-0.4781, M:6.4542, S:0.17565, P01:3.983, P1:4.444, P3:4.749, P5:4.924, P10:5.212, P15:5.42, P25:5.752, P50:6.454, P75:7.291, P85:7.808, P90:8.19, P95:8.808, P97:9.247, P99:10.169, P999:12.099},
    371: { L:-0.4807, M:6.4407, S:0.17573, P01:3.975, P1:4.434, P3:4.739, P5:4.913, P10:5.201, P15:5.409, P25:5.739, P50:6.441, P75:7.277, P85:7.793, P90:8.174, P95:8.792, P97:9.231, P99:10.153, P999:12.085},
    376: { L:-0.4833, M:6.4275, S:0.17581, P01:3.968, P1:4.425, P3:4.73, P5:4.903, P10:5.19, P15:5.398, P25:5.727, P50:6.428, P75:7.262, P85:7.778, P90:8.159, P95:8.777, P97:9.215, P99:10.138, P999:12.071},
    381: { L:-0.4859, M:6.4146, S:0.17589, P01:3.96, P1:4.417, P3:4.72, P5:4.893, P10:5.179, P15:5.387, P25:5.716, P50:6.415, P75:7.248, P85:7.764, P90:8.144, P95:8.761, P97:9.2, P99:10.123, P999:12.058},
    386: { L:-0.4885, M:6.4019, S:0.17597, P01:3.952, P1:4.408, P3:4.711, P5:4.884, P10:5.169, P15:5.376, P25:5.704, P50:6.402, P75:7.235, P85:7.749, P90:8.13, P95:8.747, P97:9.185, P99:10.108, P999:12.045},
    391: { L:-0.491, M:6.3894, S:0.17605, P01:3.945, P1:4.399, P3:4.701, P5:4.874, P10:5.159, P15:5.365, P25:5.693, P50:6.389, P75:7.221, P85:7.735, P90:8.115, P95:8.732, P97:9.171, P99:10.093, P999:12.032},
    396: { L:-0.4936, M:6.3772, S:0.17613, P01:3.938, P1:4.391, P3:4.692, P5:4.864, P10:5.149, P15:5.355, P25:5.682, P50:6.377, P75:7.208, P85:7.722, P90:8.101, P95:8.718, P97:9.156, P99:10.079, P999:12.02},
    401: { L:-0.4961, M:6.3653, S:0.17621, P01:3.931, P1:4.383, P3:4.683, P5:4.855, P10:5.139, P15:5.344, P25:5.671, P50:6.365, P75:7.195, P85:7.708, P90:8.088, P95:8.704, P97:9.142, P99:10.066, P999:12.009},
    406: { L:-0.4986, M:6.3535, S:0.17629, P01:3.924, P1:4.375, P3:4.675, P5:4.846, P10:5.129, P15:5.334, P25:5.66, P50:6.354, P75:7.182, P85:7.695, P90:8.074, P95:8.69, P97:9.129, P99:10.052, P999:11.997},
    411: { L:-0.5012, M:6.342, S:0.17637, P01:3.917, P1:4.367, P3:4.666, P5:4.837, P10:5.12, P15:5.324, P25:5.65, P50:6.342, P75:7.17, P85:7.682, P90:8.061, P95:8.677, P97:9.116, P99:10.04, P999:11.987},
    416: { L:-0.5037, M:6.3307, S:0.17645, P01:3.91, P1:4.359, P3:4.658, P5:4.828, P10:5.11, P15:5.315, P25:5.64, P50:6.331, P75:7.157, P85:7.67, P90:8.049, P95:8.664, P97:9.103, P99:10.027, P999:11.976},
    421: { L:-0.5062, M:6.3196, S:0.17653, P01:3.904, P1:4.352, P3:4.65, P5:4.82, P10:5.101, P15:5.305, P25:5.63, P50:6.32, P75:7.145, P85:7.657, P90:8.036, P95:8.651, P97:9.09, P99:10.015, P999:11.966},
    426: { L:-0.5086, M:6.3088, S:0.1766, P01:3.897, P1:4.344, P3:4.642, P5:4.812, P10:5.092, P15:5.296, P25:5.62, P50:6.309, P75:7.134, P85:7.645, P90:8.024, P95:8.639, P97:9.077, P99:10.002, P999:11.956},
    431: { L:-0.5111, M:6.2981, S:0.17668, P01:3.891, P1:4.337, P3:4.634, P5:4.803, P10:5.083, P15:5.287, P25:5.61, P50:6.298, P75:7.122, P85:7.633, P90:8.012, P95:8.627, P97:9.065, P99:9.99, P999:11.946},
    436: { L:-0.5136, M:6.2877, S:0.17676, P01:3.885, P1:4.33, P3:4.626, P5:4.795, P10:5.075, P15:5.278, P25:5.601, P50:6.288, P75:7.111, P85:7.622, P90:8, P95:8.615, P97:9.053, P99:9.979, P999:11.937},
    441: { L:-0.516, M:6.2775, S:0.17683, P01:3.879, P1:4.323, P3:4.618, P5:4.787, P10:5.067, P15:5.269, P25:5.591, P50:6.278, P75:7.1, P85:7.61, P90:7.988, P95:8.603, P97:9.042, P99:9.968, P999:11.928},
    446: { L:-0.5185, M:6.2674, S:0.17691, P01:3.873, P1:4.316, P3:4.611, P5:4.78, P10:5.058, P15:5.26, P25:5.582, P50:6.267, P75:7.089, P85:7.599, P90:7.977, P95:8.592, P97:9.03, P99:9.957, P999:11.92},
    451: { L:-0.5209, M:6.2576, S:0.17698, P01:3.867, P1:4.309, P3:4.604, P5:4.772, P10:5.05, P15:5.252, P25:5.573, P50:6.258, P75:7.078, P85:7.588, P90:7.966, P95:8.581, P97:9.019, P99:9.946, P999:11.912},
    456: { L:-0.5233, M:6.2479, S:0.17706, P01:3.862, P1:4.303, P3:4.596, P5:4.764, P10:5.042, P15:5.244, P25:5.564, P50:6.248, P75:7.068, P85:7.577, P90:7.955, P95:8.57, P97:9.008, P99:9.936, P999:11.904},
    461: { L:-0.5257, M:6.2384, S:0.17714, P01:3.856, P1:4.296, P3:4.589, P5:4.757, P10:5.034, P15:5.235, P25:5.556, P50:6.238, P75:7.058, P85:7.567, P90:7.944, P95:8.559, P97:8.998, P99:9.926, P999:11.897},
    466: { L:-0.5281, M:6.2292, S:0.17721, P01:3.851, P1:4.29, P3:4.582, P5:4.75, P10:5.027, P15:5.228, P25:5.547, P50:6.229, P75:7.048, P85:7.557, P90:7.934, P95:8.549, P97:8.988, P99:9.916, P999:11.889},
    471: { L:-0.5305, M:6.2201, S:0.17729, P01:3.845, P1:4.284, P3:4.576, P5:4.743, P10:5.019, P15:5.22, P25:5.539, P50:6.22, P75:7.038, P85:7.547, P90:7.924, P95:8.539, P97:8.978, P99:9.907, P999:11.883},
    476: { L:-0.5329, M:6.2111, S:0.17736, P01:3.84, P1:4.278, P3:4.569, P5:4.736, P10:5.012, P15:5.212, P25:5.531, P50:6.211, P75:7.028, P85:7.537, P90:7.914, P95:8.528, P97:8.968, P99:9.897, P999:11.876},
    481: { L:-0.5353, M:6.2024, S:0.17743, P01:3.835, P1:4.272, P3:4.563, P5:4.729, P10:5.005, P15:5.205, P25:5.523, P50:6.202, P75:7.019, P85:7.527, P90:7.904, P95:8.519, P97:8.958, P99:9.889, P999:11.87},
    486: { L:-0.5377, M:6.1938, S:0.17751, P01:3.83, P1:4.266, P3:4.556, P5:4.723, P10:4.997, P15:5.197, P25:5.515, P50:6.194, P75:7.01, P85:7.518, P90:7.895, P95:8.509, P97:8.949, P99:9.88, P999:11.864},
    491: { L:-0.54, M:6.1854, S:0.17758, P01:3.825, P1:4.26, P3:4.55, P5:4.716, P10:4.991, P15:5.19, P25:5.508, P50:6.185, P75:7.001, P85:7.509, P90:7.885, P95:8.5, P97:8.94, P99:9.871, P999:11.858},
    496: { L:-0.5424, M:6.1771, S:0.17765, P01:3.82, P1:4.254, P3:4.544, P5:4.71, P10:4.984, P15:5.183, P25:5.5, P50:6.177, P75:6.992, P85:7.499, P90:7.876, P95:8.491, P97:8.931, P99:9.863, P999:11.853},
    501: { L:-0.5447, M:6.169, S:0.17773, P01:3.815, P1:4.249, P3:4.538, P5:4.703, P10:4.977, P15:5.176, P25:5.493, P50:6.169, P75:6.983, P85:7.491, P90:7.867, P95:8.482, P97:8.922, P99:9.855, P999:11.848},
    506: { L:-0.5471, M:6.1611, S:0.1778, P01:3.811, P1:4.243, P3:4.532, P5:4.697, P10:4.97, P15:5.169, P25:5.485, P50:6.161, P75:6.975, P85:7.482, P90:7.859, P95:8.474, P97:8.914, P99:9.847, P999:11.843},
    511: { L:-0.5494, M:6.1533, S:0.17787, P01:3.806, P1:4.238, P3:4.526, P5:4.691, P10:4.964, P15:5.162, P25:5.478, P50:6.153, P75:6.966, P85:7.473, P90:7.85, P95:8.465, P97:8.905, P99:9.84, P999:11.839},
    516: { L:-0.5517, M:6.1457, S:0.17795, P01:3.802, P1:4.233, P3:4.52, P5:4.685, P10:4.958, P15:5.156, P25:5.471, P50:6.146, P75:6.958, P85:7.465, P90:7.842, P95:8.457, P97:8.897, P99:9.833, P999:11.835},
    521: { L:-0.554, M:6.1382, S:0.17802, P01:3.797, P1:4.228, P3:4.515, P5:4.679, P10:4.952, P15:5.149, P25:5.465, P50:6.138, P75:6.95, P85:7.457, P90:7.834, P95:8.449, P97:8.89, P99:9.825, P999:11.831},
    526: { L:-0.5563, M:6.1308, S:0.17809, P01:3.793, P1:4.223, P3:4.509, P5:4.674, P10:4.945, P15:5.143, P25:5.458, P50:6.131, P75:6.942, P85:7.449, P90:7.826, P95:8.441, P97:8.882, P99:9.818, P999:11.827},
    531: { L:-0.5586, M:6.1236, S:0.17816, P01:3.789, P1:4.218, P3:4.504, P5:4.668, P10:4.939, P15:5.137, P25:5.451, P50:6.124, P75:6.935, P85:7.441, P90:7.818, P95:8.433, P97:8.874, P99:9.812, P999:11.823},
    536: { L:-0.5609, M:6.1166, S:0.17823, P01:3.785, P1:4.213, P3:4.499, P5:4.663, P10:4.934, P15:5.131, P25:5.445, P50:6.117, P75:6.927, P85:7.434, P90:7.81, P95:8.426, P97:8.867, P99:9.805, P999:11.82},
    541: { L:-0.5632, M:6.1096, S:0.1783, P01:3.781, P1:4.208, P3:4.494, P5:4.657, P10:4.928, P15:5.125, P25:5.438, P50:6.11, P75:6.92, P85:7.426, P90:7.803, P95:8.418, P97:8.86, P99:9.799, P999:11.817},
    546: { L:-0.5655, M:6.1028, S:0.17837, P01:3.777, P1:4.204, P3:4.489, P5:4.652, P10:4.922, P15:5.119, P25:5.432, P50:6.103, P75:6.913, P85:7.419, P90:7.795, P95:8.411, P97:8.853, P99:9.793, P999:11.814},
    551: { L:-0.5677, M:6.0961, S:0.17844, P01:3.773, P1:4.199, P3:4.484, P5:4.647, P10:4.917, P15:5.113, P25:5.426, P50:6.096, P75:6.905, P85:7.412, P90:7.788, P95:8.404, P97:8.846, P99:9.787, P999:11.811},
    556: { L:-0.57, M:6.0895, S:0.17852, P01:3.769, P1:4.195, P3:4.479, P5:4.642, P10:4.911, P15:5.107, P25:5.42, P50:6.09, P75:6.899, P85:7.405, P90:7.781, P95:8.397, P97:8.84, P99:9.781, P999:11.81},
    561: { L:-0.5722, M:6.0831, S:0.17859, P01:3.766, P1:4.19, P3:4.474, P5:4.637, P10:4.906, P15:5.102, P25:5.414, P50:6.083, P75:6.892, P85:7.398, P90:7.774, P95:8.391, P97:8.833, P99:9.776, P999:11.807},
    566: { L:-0.5745, M:6.0767, S:0.17866, P01:3.762, P1:4.186, P3:4.469, P5:4.632, P10:4.901, P15:5.096, P25:5.408, P50:6.077, P75:6.885, P85:7.391, P90:7.768, P95:8.384, P97:8.827, P99:9.77, P999:11.805},
    571: { L:-0.5767, M:6.0705, S:0.17873, P01:3.758, P1:4.182, P3:4.465, P5:4.627, P10:4.895, P15:5.091, P25:5.403, P50:6.071, P75:6.878, P85:7.384, P90:7.761, P95:8.378, P97:8.821, P99:9.765, P999:11.804},
    576: { L:-0.579, M:6.0644, S:0.17879, P01:3.755, P1:4.178, P3:4.46, P5:4.622, P10:4.89, P15:5.086, P25:5.397, P50:6.064, P75:6.872, P85:7.378, P90:7.754, P95:8.371, P97:8.815, P99:9.76, P999:11.802},
    581: { L:-0.5812, M:6.0585, S:0.17886, P01:3.752, P1:4.174, P3:4.456, P5:4.618, P10:4.886, P15:5.08, P25:5.392, P50:6.059, P75:6.866, P85:7.371, P90:7.748, P95:8.365, P97:8.809, P99:9.755, P999:11.801},
    586: { L:-0.5834, M:6.0526, S:0.17893, P01:3.748, P1:4.17, P3:4.451, P5:4.613, P10:4.881, P15:5.075, P25:5.386, P50:6.053, P75:6.859, P85:7.365, P90:7.742, P95:8.359, P97:8.803, P99:9.751, P999:11.8},
    591: { L:-0.5856, M:6.0469, S:0.179, P01:3.745, P1:4.166, P3:4.447, P5:4.609, P10:4.876, P15:5.07, P25:5.381, P50:6.047, P75:6.854, P85:7.359, P90:7.736, P95:8.354, P97:8.798, P99:9.746, P999:11.799},
    596: { L:-0.5878, M:6.0413, S:0.17907, P01:3.742, P1:4.162, P3:4.443, P5:4.604, P10:4.871, P15:5.066, P25:5.376, P50:6.041, P75:6.848, P85:7.353, P90:7.73, P95:8.348, P97:8.793, P99:9.742, P999:11.798},
    601: { L:-0.59, M:6.0357, S:0.17914, P01:3.738, P1:4.158, P3:4.439, P5:4.6, P10:4.867, P15:5.061, P25:5.371, P50:6.036, P75:6.842, P85:7.347, P90:7.724, P95:8.343, P97:8.788, P99:9.738, P999:11.798},
    606: { L:-0.5922, M:6.0303, S:0.17921, P01:3.735, P1:4.155, P3:4.435, P5:4.596, P10:4.862, P15:5.056, P25:5.366, P50:6.03, P75:6.836, P85:7.342, P90:7.719, P95:8.337, P97:8.783, P99:9.734, P999:11.798},
    611: { L:-0.5944, M:6.0251, S:0.17928, P01:3.732, P1:4.151, P3:4.431, P5:4.592, P10:4.858, P15:5.052, P25:5.361, P50:6.025, P75:6.831, P85:7.336, P90:7.713, P95:8.332, P97:8.778, P99:9.73, P999:11.798},
    616: { L:-0.5966, M:6.0199, S:0.17934, P01:3.729, P1:4.148, P3:4.427, P5:4.588, P10:4.853, P15:5.047, P25:5.356, P50:6.02, P75:6.825, P85:7.331, P90:7.708, P95:8.327, P97:8.773, P99:9.726, P999:11.798},
    621: { L:-0.5988, M:6.0148, S:0.17941, P01:3.727, P1:4.144, P3:4.423, P5:4.584, P10:4.849, P15:5.043, P25:5.352, P50:6.015, P75:6.82, P85:7.325, P90:7.703, P95:8.322, P97:8.769, P99:9.723, P999:11.799},
    626: { L:-0.6009, M:6.0098, S:0.17948, P01:3.724, P1:4.141, P3:4.42, P5:4.58, P10:4.845, P15:5.038, P25:5.347, P50:6.01, P75:6.815, P85:7.32, P90:7.698, P95:8.318, P97:8.764, P99:9.719, P999:11.799},
    631: { L:-0.6031, M:6.005, S:0.17955, P01:3.721, P1:4.137, P3:4.416, P5:4.576, P10:4.841, P15:5.034, P25:5.343, P50:6.005, P75:6.81, P85:7.315, P90:7.693, P95:8.313, P97:8.76, P99:9.717, P999:11.8},
    636: { L:-0.6052, M:6.0002, S:0.17961, P01:3.718, P1:4.134, P3:4.412, P5:4.572, P10:4.837, P15:5.03, P25:5.338, P50:6, P75:6.805, P85:7.31, P90:7.688, P95:8.308, P97:8.756, P99:9.713, P999:11.801},
    641: { L:-0.6074, M:5.9955, S:0.17968, P01:3.716, P1:4.131, P3:4.409, P5:4.569, P10:4.833, P15:5.026, P25:5.334, P50:5.996, P75:6.8, P85:7.306, P90:7.683, P95:8.304, P97:8.752, P99:9.71, P999:11.802},
    646: { L:-0.6095, M:5.991, S:0.17975, P01:3.713, P1:4.128, P3:4.406, P5:4.565, P10:4.829, P15:5.022, P25:5.33, P50:5.991, P75:6.795, P85:7.301, P90:7.679, P95:8.3, P97:8.748, P99:9.708, P999:11.804},
    651: { L:-0.6117, M:5.9865, S:0.17981, P01:3.711, P1:4.125, P3:4.402, P5:4.562, P10:4.826, P15:5.018, P25:5.326, P50:5.987, P75:6.79, P85:7.296, P90:7.674, P95:8.296, P97:8.744, P99:9.705, P999:11.805},
    656: { L:-0.6138, M:5.9821, S:0.17988, P01:3.708, P1:4.122, P3:4.399, P5:4.558, P10:4.822, P15:5.014, P25:5.321, P50:5.982, P75:6.786, P85:7.292, P90:7.67, P95:8.292, P97:8.741, P99:9.703, P999:11.807},
    661: { L:-0.6159, M:5.9778, S:0.17995, P01:3.706, P1:4.119, P3:4.396, P5:4.555, P10:4.818, P15:5.01, P25:5.317, P50:5.978, P75:6.782, P85:7.288, P90:7.666, P95:8.288, P97:8.737, P99:9.701, P999:11.809},
    666: { L:-0.6181, M:5.9736, S:0.18001, P01:3.703, P1:4.116, P3:4.393, P5:4.551, P10:4.815, P15:5.007, P25:5.314, P50:5.974, P75:6.777, P85:7.283, P90:7.662, P95:8.284, P97:8.734, P99:9.698, P999:11.811},
    671: { L:-0.6202, M:5.9695, S:0.18008, P01:3.701, P1:4.113, P3:4.39, P5:4.548, P10:4.811, P15:5.003, P25:5.31, P50:5.97, P75:6.773, P85:7.279, P90:7.658, P95:8.281, P97:8.731, P99:9.697, P999:11.813},
    676: { L:-0.6223, M:5.9654, S:0.18015, P01:3.699, P1:4.111, P3:4.386, P5:4.545, P10:4.808, P15:4.999, P25:5.306, P50:5.965, P75:6.769, P85:7.275, P90:7.654, P95:8.277, P97:8.728, P99:9.695, P999:11.816},
    681: { L:-0.6244, M:5.9615, S:0.18021, P01:3.697, P1:4.108, P3:4.384, P5:4.542, P10:4.805, P15:4.996, P25:5.302, P50:5.962, P75:6.765, P85:7.271, P90:7.65, P95:8.274, P97:8.725, P99:9.693, P999:11.818},
    686: { L:-0.6265, M:5.9576, S:0.18028, P01:3.694, P1:4.105, P3:4.381, P5:4.539, P10:4.801, P15:4.993, P25:5.299, P50:5.958, P75:6.761, P85:7.267, P90:7.646, P95:8.271, P97:8.722, P99:9.691, P999:11.821},
    691: { L:-0.6286, M:5.9537, S:0.18034, P01:3.692, P1:4.103, P3:4.378, P5:4.536, P10:4.798, P15:4.989, P25:5.295, P50:5.954, P75:6.757, P85:7.263, P90:7.643, P95:8.267, P97:8.719, P99:9.689, P999:11.823},
    696: { L:-0.6307, M:5.95, S:0.18041, P01:3.69, P1:4.1, P3:4.375, P5:4.533, P10:4.795, P15:4.986, P25:5.292, P50:5.95, P75:6.753, P85:7.26, P90:7.639, P95:8.264, P97:8.716, P99:9.688, P999:11.827},
    701: { L:-0.6327, M:5.9463, S:0.18047, P01:3.688, P1:4.098, P3:4.372, P5:4.53, P10:4.792, P15:4.983, P25:5.288, P50:5.946, P75:6.749, P85:7.256, P90:7.636, P95:8.261, P97:8.714, P99:9.687, P999:11.829},
    706: { L:-0.6348, M:5.9427, S:0.18054, P01:3.686, P1:4.095, P3:4.37, P5:4.527, P10:4.789, P15:4.98, P25:5.285, P50:5.943, P75:6.746, P85:7.253, P90:7.632, P95:8.258, P97:8.711, P99:9.686, P999:11.833},
    711: { L:-0.6369, M:5.9391, S:0.1806, P01:3.684, P1:4.093, P3:4.367, P5:4.524, P10:4.786, P15:4.976, P25:5.282, P50:5.939, P75:6.742, P85:7.249, P90:7.629, P95:8.255, P97:8.709, P99:9.684, P999:11.836},
    716: { L:-0.639, M:5.9356, S:0.18067, P01:3.682, P1:4.091, P3:4.364, P5:4.522, P10:4.783, P15:4.973, P25:5.278, P50:5.936, P75:6.738, P85:7.246, P90:7.626, P95:8.253, P97:8.706, P99:9.683, P999:11.84},
    721: { L:-0.641, M:5.9322, S:0.18073, P01:3.68, P1:4.088, P3:4.362, P5:4.519, P10:4.78, P15:4.97, P25:5.275, P50:5.932, P75:6.735, P85:7.242, P90:7.623, P95:8.25, P97:8.704, P99:9.682, P999:11.843},
    726: { L:-0.6431, M:5.9288, S:0.18079, P01:3.679, P1:4.086, P3:4.359, P5:4.516, P10:4.777, P15:4.967, P25:5.272, P50:5.929, P75:6.732, P85:7.239, P90:7.619, P95:8.247, P97:8.702, P99:9.681, P999:11.847},
};

export default ssfaBoys;