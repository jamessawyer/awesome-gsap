GSAP提供的一些工具方法，通过 `gsap.utils.xxx()` 方式使用

```js
// 获取属性相关浏览器前缀，比如获取 `filter`属性 'WebkitFilter', 'MozFilter'
// checkPrefix('transform') -> 'msTransform'
checkPrefix()

// 得到区间内的值，比如颜色值0-255，超过255取255，小于0取0 clamp(0, 255)
// clamp(0, 100, -12) -> 0
clamp()

// 返回一个函数，该函数根据你提供的输入分配一个值数组。
distribute()

// 获取字符串单位
// gsap.utils.getUnit("50%") -> '%'
// gsap.utils.getUnit("100vw") -> 'vw'
getUnit()

// 在值之间进行插值操作
// interpolate('red', 'blue', '0.5') -> 'rgba(128,0,128,1'
interpolate()

// 将一个区间映射为另一个区间
// mapRange(-10, 10, 0, 100, 5) -> 75
mapRange()

// 将一个区间映射为 0-1 区间
// normalize(100, 200, 150) -> 0.5
normalize()

// 序列化函数调用
// pipe(clamp(0, 100), snap(5))(8) -> 10
pipe()

// 生成一个随机值
// random(['red', 'green', 'blue']) -> 'blue'
random()

// 获取一个作用域选择器函数
// selector(myElement)
selector()

// 随机打乱数组
// shuffle([1, 2, 3, 4, 5]) --> [4, 2, 1, 5, 3]
shuffle()

// 增加靠近某个值或靠近某个数组中最接近的值
// snap(5, 13) -> 15
// snap([0， 5， 10]， 7) -> 5
snap()

// 拆分为RGB数组
// splitColor('red') -> [255, 0, 0]
splitColor()

// ⭐ 将类数组转换为数组
// 比如选择某个类元素
// toArray('.class') -> [element1, element2]
toArray()

// 包裹其它的工具函数，允许接收包含单位的值，去掉其单位
// var wrap gsap.utils.unitize(gsap.utils.wrap(0,100))
// wrap('150px') -> '50px'
unitize()

// ⭐ 将一个数字放入指定的范围内，当它超过最大值时，将返回开始位置，
//   如果小于最小值，则返回结束位置
// wrap(5, 10, 12) -> 7
// 或则 循环遍历数组，这样当提供的索引大于数组的长度时，它就返回到开始位置
// 索引为4，共5个值，循环 0 - 1 - 2 - 0 - 1
// wrap([0, 10, 20], 4) --> 10
wrap()

// ⭐ 将一个数字放在一个指定的范围内，当它超过最大值时，
//    它就向开始方向旋转，如果它小于最小值，它就向前旋转到结束
//    wrapYoyo(5, 10, 12)  -> 8
// 或则 循环数组，这样当提供的索引大于数组的长度时，它就会回到起点
// 索引为4，共5个值，循环 0 - 1 - 2 - 3 - 2
//   wrapYoyo([0, 10, 20, 30], 4) --> 20
wrapYoyo()
```
可查看 [GSAP - Utility Methods](https://greensock.com/docs/v3/GSAP/UtilityMethods)