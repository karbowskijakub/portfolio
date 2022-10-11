const size = {
    xss: '0px',
    xs: '576px',
    sm:'768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
   }
   const device = {
    xss: `(min-width: ${size.xss})`,
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
   }
   export default {size, device}