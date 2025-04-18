import { isUndefined, isNumber, isObject, isArray } from 'lodash-es';
import { GutterObject, TdColProps, TdRowProps } from '../type';

export interface RowProviderType {
  gutter: TdRowProps['gutter'];
}

/**
 *
 * @param name
 * @param props
 * @returns
 */
export function getRowClasses(name: string, props: TdRowProps) {
  const { justify, align } = props;
  return [
    name,
    {
      [`${name}--${justify}`]: justify,
      // 区分 justify 传值
      [`${name}--align-${align}`]: align,
    },
  ];
}

/**
 *
 * @param gutter
 * @param currentSize
 * @returns
 */
export function calcRowStyle(gutter: TdRowProps['gutter'], currentSize: keyof GutterObject) {
  const rowStyle = {};
  const getMarginStyle = (gutter: number) =>
    Object.assign(rowStyle, {
      marginLeft: `${gutter / -2}px`,
      marginRight: `${gutter / -2}px`,
    });

  const getRowGapStyle = (gutter: number) =>
    Object.assign(rowStyle, {
      rowGap: `${gutter}px`,
    });

  const strategyMap = {
    isNumber: (gutter: TdRowProps['gutter']) => {
      if (isNumber(gutter)) {
        getMarginStyle(gutter);
      }
    },
    isArray: (gutter: TdRowProps['gutter']) => {
      if (isArray(gutter) && gutter.length) {
        strategyMap.isNumber(gutter[0]);

        if (isNumber(gutter[1])) {
          getRowGapStyle(gutter[1]);
        }

        if (isObject(gutter[0]) && !isUndefined(gutter[0][currentSize])) {
          getMarginStyle(gutter[0][currentSize]);
        }

        if (isObject(gutter[1]) && !isUndefined(gutter[1][currentSize])) {
          getRowGapStyle(gutter[1][currentSize]);
        }
      }
    },
    isObject: (gutter: TdRowProps['gutter']) => {
      // TODO: check and remove unreachable code
      // @ts-ignore
      if (isObject(gutter) && gutter[currentSize]) {
        if (isArray(gutter) && gutter.length) {
          // @ts-ignore
          getMarginStyle(gutter[currentSize][0]);
          // @ts-ignore
          getRowGapStyle(gutter[currentSize][1]);
        } else {
          // @ts-ignore
          getMarginStyle(gutter[currentSize]);
        }
      }
    },
  };

  Object.keys(strategyMap).forEach((item: keyof typeof strategyMap) => {
    strategyMap[item](gutter);
  });

  return rowStyle;
}
/**
 * 解析Flex
 * @param flex
 * @returns
 */
export function parseFlex(flex: TdColProps['flex']): string {
  if (isNumber(flex)) {
    return `${flex} ${flex} 0`;
  }
  // 判断是否是flex
  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}

/**
 * 计算ColPadding
 * @param gutter
 * @param currentSize
 * @returns
 */
export function calcColPadding(gutter: TdRowProps['gutter'], currentSize: keyof GutterObject) {
  const paddingObj = {};
  const getPaddingStyle = (gutter: number) =>
    Object.assign(paddingObj, {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    });

  const strategyMap = {
    isNumber: (gutter: TdRowProps['gutter']) => {
      if (isNumber(gutter)) {
        getPaddingStyle(gutter);
      }
    },
    isArray: (gutter: TdRowProps['gutter']) => {
      if (isArray(gutter) && gutter.length) {
        if (isNumber(gutter[0])) {
          getPaddingStyle(gutter[0]);
        }
        if (isObject(gutter[0]) && gutter[0][currentSize]) {
          getPaddingStyle(gutter[0][currentSize]);
        }
      }
    },
    isObject: (gutter: TdRowProps['gutter']) => {
      // TODO: replace isObject as isPlainObject
      if (isObject(gutter) && !isArray(gutter) && gutter[currentSize]) {
        getPaddingStyle(gutter[currentSize]);
      }
    },
  };

  Object.keys(strategyMap).forEach((item: keyof typeof strategyMap) => {
    strategyMap[item](gutter);
  });

  return paddingObj;
}

/**
 * 获取 col size
 * @param props
 * @returns
 */
export function getColClasses(name: string, props: TdColProps) {
  const { span, order, offset, push, pull } = props;
  const allSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

  const ColSizeClasses = allSizes.reduce((acc, currSize) => {
    const sizeProp = props[currSize];
    let sizeObject: any = {};
    if (isNumber(sizeProp)) {
      sizeObject.span = sizeProp;
    } else if (isObject(sizeProp)) {
      sizeObject = sizeProp || {};
    }
    return {
      ...acc,
      [`${name}-${currSize}-${sizeObject.span}`]: !isUndefined(sizeObject.span),
      [`${name}-${currSize}-order-${sizeObject.order}`]: parseInt(sizeObject.order, 10) >= 0,
      [`${name}-${currSize}-offset-${sizeObject.offset}`]: parseInt(sizeObject.offset, 10) >= 0,
      [`${name}-${currSize}-push-${sizeObject.push}`]: parseInt(sizeObject.push, 10) >= 0,
      [`${name}-${currSize}-pull-${sizeObject.pull}`]: parseInt(sizeObject.pull, 10) >= 0,
    };
  }, {});

  return {
    [`${name}`]: true,
    [`${name}-${span}`]: !isUndefined(span),
    [`${name}-order-${order}`]: order,
    [`${name}-offset-${offset}`]: offset,
    [`${name}-push-${push}`]: push,
    [`${name}-pull-${pull}`]: pull,
    ...ColSizeClasses,
  };
}
