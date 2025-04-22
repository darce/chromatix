export type ColorModel = 'rgb' | 'hsl' | 'hsv';

export type RGB = Readonly<{
    r: number; // 0 - 255
    g: number; // 0 - 255
    b: number; // 0 - 255
    a?: number; // 0 - 255
}>;

export type HSL= Readonly<{
    h: number; // 0 - 360
    s: number; // 0 - 100
    l: number; // 0 - 100
    a?: number; // 0 - 100
}>;

export type HSV = Readonly<{
    h: number; // 0 - 360
    s: number; // 0 - 100
    v: number; // 0 - 100
    a?: number; // 0 - 100
}>;

export type Color =
    | Readonly<{ model: 'rgb'; value: RGB}>
    | Readonly<{ model: 'hsl'; value: HSL}>
    | Readonly<{ model: 'hsv'; value: HSV}>;
