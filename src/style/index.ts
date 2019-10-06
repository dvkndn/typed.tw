// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): Tailwind {
    this.value = `${this.value} ${value}`;
    return this;
  }

  // Styling methods
  block(): Tailwind { return this.add("block"); }
  inlineBlock(): Tailwind { return this.add("inline-block"); }
  inline(): Tailwind { return this.add("inline"); }
  flex(): Tailwind { return this.add("flex"); }
  inlineFlex(): Tailwind { return this.add("inline-flex"); }
  table(): Tailwind { return this.add("table"); }
  tableRow(): Tailwind { return this.add("table-row"); }
  tableCell(): Tailwind { return this.add("table-cell"); }
  hidden(): Tailwind { return this.add("hidden"); }
  flex1(): Tailwind { return this.add("flex-1"); }
  flexNone(): Tailwind { return this.add("flex-none"); }
  h4(): Tailwind { return this.add("h-4"); }
  h8(): Tailwind { return this.add("h-8"); }
  h12(): Tailwind { return this.add("h-12"); }
  h16(): Tailwind { return this.add("h-16"); }
  h24(): Tailwind { return this.add("h-24"); }
  h32(): Tailwind { return this.add("h-32"); }
  h40(): Tailwind { return this.add("h-40"); }
  h48(): Tailwind { return this.add("h-48"); }
  h60(): Tailwind { return this.add("h-60"); }
  hFull(): Tailwind { return this.add("h-full"); }
  hScreen(): Tailwind { return this.add("h-screen"); }
  overflowAuto(): Tailwind { return this.add("overflow-auto"); }
  overflowHidden(): Tailwind { return this.add("overflow-hidden"); }
  overflowVisible(): Tailwind { return this.add("overflow-visible"); }
  overflowScroll(): Tailwind { return this.add("overflow-scroll"); }
  overflowXAuto(): Tailwind { return this.add("overflow-x-auto"); }
  overflowYAuto(): Tailwind { return this.add("overflow-y-auto"); }
  overflowXHidden(): Tailwind { return this.add("overflow-x-hidden"); }
  overflowYHidden(): Tailwind { return this.add("overflow-y-hidden"); }
  overflowXVisible(): Tailwind { return this.add("overflow-x-visible"); }
  overflowYVisible(): Tailwind { return this.add("overflow-y-visible"); }
  overflowXScroll(): Tailwind { return this.add("overflow-x-scroll"); }
  overflowYScroll(): Tailwind { return this.add("overflow-y-scroll"); }
  scrollingTouch(): Tailwind { return this.add("scrolling-touch"); }
  scrollingAuto(): Tailwind { return this.add("scrolling-auto"); }
  text0(): Tailwind { return this.add("text-0"); }
  text1(): Tailwind { return this.add("text-1"); }
  text2(): Tailwind { return this.add("text-2"); }
  text3(): Tailwind { return this.add("text-3"); }
  text4(): Tailwind { return this.add("text-4"); }
  text5(): Tailwind { return this.add("text-5"); }
  text6(): Tailwind { return this.add("text-6"); }
  text7(): Tailwind { return this.add("text-7"); }
  text8(): Tailwind { return this.add("text-8"); }
  text9(): Tailwind { return this.add("text-9"); }
  textCurrentColor(): Tailwind { return this.add("text-currentColor"); }
  textTransparent(): Tailwind { return this.add("text-transparent"); }
  textA(): Tailwind { return this.add("text-A"); }
  textB(): Tailwind { return this.add("text-B"); }
  textC(): Tailwind { return this.add("text-C"); }
  textD(): Tailwind { return this.add("text-D"); }
  textE(): Tailwind { return this.add("text-E"); }
  textF(): Tailwind { return this.add("text-F"); }
  text0At90(): Tailwind { return this.add("text-0at90"); }
  selectNone(): Tailwind { return this.add("select-none"); }
  selectText(): Tailwind { return this.add("select-text"); }
  selectAll(): Tailwind { return this.add("select-all"); }
  selectAuto(): Tailwind { return this.add("select-auto"); }
  w4(): Tailwind { return this.add("w-4"); }
  w8(): Tailwind { return this.add("w-8"); }
  w12(): Tailwind { return this.add("w-12"); }
  w16(): Tailwind { return this.add("w-16"); }
  w24(): Tailwind { return this.add("w-24"); }
  w32(): Tailwind { return this.add("w-32"); }
  w40(): Tailwind { return this.add("w-40"); }
  w48(): Tailwind { return this.add("w-48"); }
  w60(): Tailwind { return this.add("w-60"); }
  wFull(): Tailwind { return this.add("w-full"); }
  wScreen(): Tailwind { return this.add("w-screen"); }
  bg0(): Tailwind { return this.add("bg-0"); }
  bg1(): Tailwind { return this.add("bg-1"); }
  bg2(): Tailwind { return this.add("bg-2"); }
  bg3(): Tailwind { return this.add("bg-3"); }
  bg4(): Tailwind { return this.add("bg-4"); }
  bg5(): Tailwind { return this.add("bg-5"); }
  bg6(): Tailwind { return this.add("bg-6"); }
  bg7(): Tailwind { return this.add("bg-7"); }
  bg8(): Tailwind { return this.add("bg-8"); }
  bg9(): Tailwind { return this.add("bg-9"); }
  bgCurrentColor(): Tailwind { return this.add("bg-currentColor"); }
  bgTransparent(): Tailwind { return this.add("bg-transparent"); }
  bgA(): Tailwind { return this.add("bg-A"); }
  bgB(): Tailwind { return this.add("bg-B"); }
  bgC(): Tailwind { return this.add("bg-C"); }
  bgD(): Tailwind { return this.add("bg-D"); }
  bgE(): Tailwind { return this.add("bg-E"); }
  bgF(): Tailwind { return this.add("bg-F"); }
  bg0At90(): Tailwind { return this.add("bg-0at90"); }
  fontMono(): Tailwind { return this.add("font-mono"); }
  p4(): Tailwind { return this.add("p-4"); }
  p8(): Tailwind { return this.add("p-8"); }
  p12(): Tailwind { return this.add("p-12"); }
  p16(): Tailwind { return this.add("p-16"); }
  p24(): Tailwind { return this.add("p-24"); }
  p32(): Tailwind { return this.add("p-32"); }
  p40(): Tailwind { return this.add("p-40"); }
  p48(): Tailwind { return this.add("p-48"); }
  p60(): Tailwind { return this.add("p-60"); }
  py4(): Tailwind { return this.add("py-4"); }
  px4(): Tailwind { return this.add("px-4"); }
  py8(): Tailwind { return this.add("py-8"); }
  px8(): Tailwind { return this.add("px-8"); }
  py12(): Tailwind { return this.add("py-12"); }
  px12(): Tailwind { return this.add("px-12"); }
  py16(): Tailwind { return this.add("py-16"); }
  px16(): Tailwind { return this.add("px-16"); }
  py24(): Tailwind { return this.add("py-24"); }
  px24(): Tailwind { return this.add("px-24"); }
  py32(): Tailwind { return this.add("py-32"); }
  px32(): Tailwind { return this.add("px-32"); }
  py40(): Tailwind { return this.add("py-40"); }
  px40(): Tailwind { return this.add("px-40"); }
  py48(): Tailwind { return this.add("py-48"); }
  px48(): Tailwind { return this.add("px-48"); }
  py60(): Tailwind { return this.add("py-60"); }
  px60(): Tailwind { return this.add("px-60"); }
  pt4(): Tailwind { return this.add("pt-4"); }
  pr4(): Tailwind { return this.add("pr-4"); }
  pb4(): Tailwind { return this.add("pb-4"); }
  pl4(): Tailwind { return this.add("pl-4"); }
  pt8(): Tailwind { return this.add("pt-8"); }
  pr8(): Tailwind { return this.add("pr-8"); }
  pb8(): Tailwind { return this.add("pb-8"); }
  pl8(): Tailwind { return this.add("pl-8"); }
  pt12(): Tailwind { return this.add("pt-12"); }
  pr12(): Tailwind { return this.add("pr-12"); }
  pb12(): Tailwind { return this.add("pb-12"); }
  pl12(): Tailwind { return this.add("pl-12"); }
  pt16(): Tailwind { return this.add("pt-16"); }
  pr16(): Tailwind { return this.add("pr-16"); }
  pb16(): Tailwind { return this.add("pb-16"); }
  pl16(): Tailwind { return this.add("pl-16"); }
  pt24(): Tailwind { return this.add("pt-24"); }
  pr24(): Tailwind { return this.add("pr-24"); }
  pb24(): Tailwind { return this.add("pb-24"); }
  pl24(): Tailwind { return this.add("pl-24"); }
  pt32(): Tailwind { return this.add("pt-32"); }
  pr32(): Tailwind { return this.add("pr-32"); }
  pb32(): Tailwind { return this.add("pb-32"); }
  pl32(): Tailwind { return this.add("pl-32"); }
  pt40(): Tailwind { return this.add("pt-40"); }
  pr40(): Tailwind { return this.add("pr-40"); }
  pb40(): Tailwind { return this.add("pb-40"); }
  pl40(): Tailwind { return this.add("pl-40"); }
  pt48(): Tailwind { return this.add("pt-48"); }
  pr48(): Tailwind { return this.add("pr-48"); }
  pb48(): Tailwind { return this.add("pb-48"); }
  pl48(): Tailwind { return this.add("pl-48"); }
  pt60(): Tailwind { return this.add("pt-60"); }
  pr60(): Tailwind { return this.add("pr-60"); }
  pb60(): Tailwind { return this.add("pb-60"); }
  pl60(): Tailwind { return this.add("pl-60"); }
  rounded4(): Tailwind { return this.add("rounded-4"); }
  roundedFull(): Tailwind { return this.add("rounded-full"); }
  roundedT4(): Tailwind { return this.add("rounded-t-4"); }
  roundedR4(): Tailwind { return this.add("rounded-r-4"); }
  roundedB4(): Tailwind { return this.add("rounded-b-4"); }
  roundedL4(): Tailwind { return this.add("rounded-l-4"); }
  roundedTFull(): Tailwind { return this.add("rounded-t-full"); }
  roundedRFull(): Tailwind { return this.add("rounded-r-full"); }
  roundedBFull(): Tailwind { return this.add("rounded-b-full"); }
  roundedLFull(): Tailwind { return this.add("rounded-l-full"); }
  roundedTl4(): Tailwind { return this.add("rounded-tl-4"); }
  roundedTr4(): Tailwind { return this.add("rounded-tr-4"); }
  roundedBr4(): Tailwind { return this.add("rounded-br-4"); }
  roundedBl4(): Tailwind { return this.add("rounded-bl-4"); }
  roundedTlFull(): Tailwind { return this.add("rounded-tl-full"); }
  roundedTrFull(): Tailwind { return this.add("rounded-tr-full"); }
  roundedBrFull(): Tailwind { return this.add("rounded-br-full"); }
  roundedBlFull(): Tailwind { return this.add("rounded-bl-full"); }
  flexRow(): Tailwind { return this.add("flex-row"); }
  flexRowReverse(): Tailwind { return this.add("flex-row-reverse"); }
  flexCol(): Tailwind { return this.add("flex-col"); }
  flexColReverse(): Tailwind { return this.add("flex-col-reverse"); }
  static(): Tailwind { return this.add("static"); }
  fixed(): Tailwind { return this.add("fixed"); }
  absolute(): Tailwind { return this.add("absolute"); }
  relative(): Tailwind { return this.add("relative"); }
  sticky(): Tailwind { return this.add("sticky"); }
  inset0(): Tailwind { return this.add("inset-0"); }
  insetY0(): Tailwind { return this.add("inset-y-0"); }
  insetX0(): Tailwind { return this.add("inset-x-0"); }
  top0(): Tailwind { return this.add("top-0"); }
  right0(): Tailwind { return this.add("right-0"); }
  bottom0(): Tailwind { return this.add("bottom-0"); }
  left0(): Tailwind { return this.add("left-0"); }
  mAuto(): Tailwind { return this.add("m-auto"); }
  myAuto(): Tailwind { return this.add("my-auto"); }
  mxAuto(): Tailwind { return this.add("mx-auto"); }
  mtAuto(): Tailwind { return this.add("mt-auto"); }
  mrAuto(): Tailwind { return this.add("mr-auto"); }
  mbAuto(): Tailwind { return this.add("mb-auto"); }
  mlAuto(): Tailwind { return this.add("ml-auto"); }
  leading1(): Tailwind { return this.add("leading-1"); }
  leading16(): Tailwind { return this.add("leading-16"); }
  textLeft(): Tailwind { return this.add("text-left"); }
  textCenter(): Tailwind { return this.add("text-center"); }
  textRight(): Tailwind { return this.add("text-right"); }
  textJustify(): Tailwind { return this.add("text-justify"); }
  itemsStart(): Tailwind { return this.add("items-start"); }
  itemsEnd(): Tailwind { return this.add("items-end"); }
  itemsCenter(): Tailwind { return this.add("items-center"); }
  itemsBaseline(): Tailwind { return this.add("items-baseline"); }
  itemsStretch(): Tailwind { return this.add("items-stretch"); }
  justifyStart(): Tailwind { return this.add("justify-start"); }
  justifyEnd(): Tailwind { return this.add("justify-end"); }
  justifyCenter(): Tailwind { return this.add("justify-center"); }
  justifyBetween(): Tailwind { return this.add("justify-between"); }
  justifyAround(): Tailwind { return this.add("justify-around"); }
  shadowPanel(): Tailwind { return this.add("shadow-panel"); }
  shadowPanelInset(): Tailwind { return this.add("shadow-panel-inset"); }
  font400(): Tailwind { return this.add("font-400"); }
  font500(): Tailwind { return this.add("font-500"); }
  font600(): Tailwind { return this.add("font-600"); }
  font700(): Tailwind { return this.add("font-700"); }
  font900(): Tailwind { return this.add("font-900"); }
  text14(): Tailwind { return this.add("text-14"); }
  text32(): Tailwind { return this.add("text-32"); }
  text96(): Tailwind { return this.add("text-96"); }
  bgBottom(): Tailwind { return this.add("bg-bottom"); }
  bgCenter(): Tailwind { return this.add("bg-center"); }
  bgLeft(): Tailwind { return this.add("bg-left"); }
  bgLeftBottom(): Tailwind { return this.add("bg-left-bottom"); }
  bgLeftTop(): Tailwind { return this.add("bg-left-top"); }
  bgRight(): Tailwind { return this.add("bg-right"); }
  bgRightBottom(): Tailwind { return this.add("bg-right-bottom"); }
  bgRightTop(): Tailwind { return this.add("bg-right-top"); }
  bgTop(): Tailwind { return this.add("bg-top"); }
  bgFixed(): Tailwind { return this.add("bg-fixed"); }
  bgLocal(): Tailwind { return this.add("bg-local"); }
  bgScroll(): Tailwind { return this.add("bg-scroll"); }
  bgAuto(): Tailwind { return this.add("bg-auto"); }
  bgCover(): Tailwind { return this.add("bg-cover"); }
  bgContain(): Tailwind { return this.add("bg-contain"); }
  underline(): Tailwind { return this.add("underline"); }
  lineThrough(): Tailwind { return this.add("line-through"); }
  noUnderline(): Tailwind { return this.add("no-underline"); }
}
