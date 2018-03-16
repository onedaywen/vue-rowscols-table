module.exports = {
	tableParam: {
		titleArr: [
			{
				text: '商品',
				width: 100
			},{
				text: '单价/数量',
				width: 100
			},{
				text: '实付金额',
				width: 100
			},{
				text: '运费',
				width: 100
			},{
				text: '订单/包裹状态',
				width: 100
			},{
				text: '买家',
				width: 200
			},{
				text: '物流信息',
				width: 100
			},{
				text: '操作',
				width: 100,
				click () {
					alert('操作')
				}
			}
		],
		contentArr: [
			[
  
				{
					colspan: 8,
					class: 'totalRow',
					data: [
						{
							class: 'order-code',
							style: {
								color: '#1abc9c'
							},
							text: '订单号码： 105240184796',
							click () {
								alert('跳转到订单详情页')
							}
						},
						'下单时间：2018-03-16 15:34:35',
						'交易单号：2018031621001004150527890114',
						'总额：￥0.40元',
						'已退款'
					]
				},
			],
			[
  
				{
					colspan: 8,
					class: 'totalRow',
					data: [
						'店铺名称：WG的小店',
						{
							text: '包裹单号： 205790199196',
							class: 'package-code',
							style: {
								color: '#1abc9c'
							},
							click () {
								alert('跳转到包裹详情页')
							}
						},
						'营业点名称：永新汇地下仓库'
					]
				},
			],
			[
				{
					data: [
						{
							src: 'asdfasdf.jpg',
							click () {
								alert('全屏查看图片')
							},
						},{
							text: '商品名称001',
						},{
							text: '商品规格001',
						},{
							text: '商品留言001',
						}
					]
					
				},
				'19.9*100',
				'1990',
				{
					rowspan: 5,
					text: '24.00'
				},{
					rowspan: 5,
					text: '退款完成'
				},{
					rowspan: 5,
					data: [
						'买家姓名：温一天',
						'买家手机号：13714034157'
					]
				},{
					rowspan: 5,
					text: '商品已发往深圳松岗分拨中心'
				},{
					rowspan: 5,
					data: [
						{
							class: 'confirm',
							style: {
								color: '#1abc9c'
							},
							text: '发货',
							click () {
								alert('发货')
							}
						},{
							class: 'confirm',
							style: {
								color: '#1abc9c'
							},
							text: '配送',
							click () {
								alert('配送')
							}
						},{
							class: 'confirm',
							style: {
								color: '#1abc9c'
							},
							text: '统一配送',
							click () {
								alert('统一配送')
							}
						}
					]
					
				}
			],
			[
				{
					data: [
						{
							src: 'asdfasdf.jpg',
							click () {
								alert('全屏查看图片')
							},
						},{
							text: '商品名称002',
						},{
							text: '商品规格002',
						},{
							text: '商品留言002',
						}
					]
					
				},
				'29.9*100',
				'2990'
			],
			[
				{
					data: [
						{
							src: 'asdfasdf.jpg',
							click () {
								alert('全屏查看图片')
							},
						},{
							text: '商品名称003',
						},{
							text: '商品规格003',
						},{
							text: '商品留言003',
						}
					]
					
				},
				'39.9*100',
				'3990'
			],
			[
				{
					data: [
						{
							src: 'asdfasdf.jpg',
							click () {
								alert('全屏查看图片')
							},
						},{
							text: '商品名称003',
						},{
							text: '商品规格003',
						},{
							text: '商品留言003',
						}
					]
					
				},
				'39.9*100',
				'3990'
			],
			[
				{
					data: [
						{
							src: 'asdfasdf.jpg',
							click () {
								alert('全屏查看图片')
							},
						},{
							text: '商品名称003',
						},{
							text: '商品规格003',
						},{
							text: '商品留言003',
						}
					]
					
				},
				'39.9*100',
				'3990'
			]
		]
	}
};