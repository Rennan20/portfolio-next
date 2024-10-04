export const size = {
  xs: '0',
  sm: '375px',
  '2sm': '600px',
  md: '744px',
  cmd: '805px',
  '2md': '834px',
  lg: '1024px',
  '2lg': '1280px',
  '3lg': '1340px',
  xl: '1440px',
  '2xl': '1640px',
};

export const devices = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  '2sm': `(min-width: ${size['2sm']})`,
  md: `(min-width: ${size.md})`,
  cmd: `(min-width: ${size.cmd})`,
  '2md': `(min-width: ${size['2md']})`,
  lg: `(min-width: ${size['lg']})`,
  '2lg': `(min-width: ${size['2lg']})`,
  '3lg': `(min-width: ${size['3lg']} )`,
  xl: `(min-width: ${size.xl} )`,
  '2xl': `(min-width: ${size['2xl']})`,
  'between-xs-md': `(min-width: ${parseInt(size.xs)}px) and (max-width: ${
    parseInt(size['md']) - 1
  }px)`,
  'between-md-lg': `(min-width: ${parseInt(size.md)}px) and (max-width: ${
    parseInt(size['lg']) - 1
  }px)`,
  'between-lg-2lx': `(min-width: ${parseInt(size['lg'])}px) and (max-width: ${
    parseInt(size['2xl']) - 1
  }px)`,
};
