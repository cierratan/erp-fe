const size = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
};

const sizes = {
  xs: `screen and (max-width: ${size.xs})`,
  sm: `screen and (max-width: ${size.sm})`,
  md: `screen and (max-width: ${size.md})`,
  lg: `screen and (max-width: ${size.lg})`,
  tablet:
    "screen and (min-device-width : 600px) and (max-device-width : 1024px)",
  smallRes:
    "screen and (min-device-width : 600px) and (max-device-width : 1440px)",
};

export default sizes;
