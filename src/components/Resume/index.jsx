import { chunk } from 'lodash-es';
import React from 'react';
import './index.css';

const resumeObj = {
	name: '张大尉',
	skills: [
		{value: 'Javascript', url: ''},
		{value: 'Typescript', url: ''},
		{value: 'React', url: ''},
		{value: 'React-Router', url: ''},
		{value: 'Redux', url: ''},
		{value: 'Mobx', url: ''},
		{value: 'Antd', url: ''},
		{value: 'Antd-Mobile', url: ''},
		{value: 'Remax', url: ''},
		{value: '小程序', url: ''},
		{value: 'Webpack', url: ''},
		{value: 'Vite', url: ''},
		{value: 'Electron', url: ''},
		{value: 'Vue', url: ''},
		{value: 'Vue-Router', url: ''},
		{value: 'Vuex', url: ''},
		{value: 'Element-UI', url: ''},
		{value: 'Lodash', url: ''},
		{value: 'Ramdajs', url: 'https://ramdajs.com/'},
		{value: 'Rxjs', url: ''},
		{value: 'Svelte', url: ''},
		{value: 'Ag-Grid', url: ''},
		{value: 'ProseMirror', url: 'https://prosemirror.net/'},
		{value: 'SpreadJs', url: 'https://www.grapecity.com.cn/developer/spreadjs'},
		{value: 'Git', url: ''},
		{value: 'Functional Programming', url: ''},
		{value: 'Astro', url: ''},
		{value: 'Express', url: ''},
		{value: 'Koa', url: ''},
		{value: 'Qwikjs', url: ''},
	]
}
export default function Home() {
	const R = resumeObj
    return <div className='h-full p-5 pt-10'>
		<h2 className='text-center mb-2'>{R.name}</h2>
		<div className="social text-xs flex justify-center items-center">
			<div>
			<span className="mr-5">手机: 18305626266</span>
			<span className="mr-5">邮箱: 189803631@qq.com</span>
			<span className="mr-5">性别: 男</span>
			<span className="mr-5">年龄: 27</span>
			<span className="mr-5"><a href="https://zhangdawei-resume.netlify.app">在线简历（更多细节）</a></span>
			</div>
		</div>
		<div className="skill mb-3">
			<div className='flex items-center mb-2'>
				<span className='text-[#0b65c3] font-bold mr-3'>Skill</span>
				<div className="flex-1 bg-[#999] tet" style={{height: '1px'}} ></div>
			</div>
			{chunk(R.skills, 10).map(x => {
				return <div className='flex items-center'>
					<span className=' mx-2 w-1 h-1 rounded-full bg-[#0b65c3] flex-shrink-0'></span>
					<div>{x.map(y => {
						if (y.url) {
							return <><span className='text-xs'><a href={y.url}>{y.value}</a></span><span className='mx-2' style={{
								borderRight: '1px solid #ccc'
							}}></span></>
						} else {
							return <><span className='text-xs'>{y.value}</span><span className='mx-2' style={{
								borderRight: '1px solid #ccc'
							}}></span></>
						}
					})}</div>
				</div>
			})}
		</div>
		<div className="exp">
			<div className='flex items-center mb-4'>
				<span className='text-[#0b65c3] font-bold mr-3'>Experience</span>
				<div className="flex-1 bg-[#999] tet" style={{height: '1px'}} ></div>
			</div>
			<div className='text-xs'>
				<div className='mb-7'>
					<div className='flex px-3 font-medium mb-4'>
						<span>前端工程师</span>
						<span className='flex-1'></span>
						<span><a href="https://www.jianguoyun.com/" target="_blank" rel="noopener noreferrer">上海亦存网络科技有限公司（坚果云）</a></span>
						<span className='flex-1'></span>
						<span>2021/07/29 — Current</span>
					</div>
					<WithDot text={<div>
						<a href="https://workspace.jianguoyun.com" target="_blank" rel="noopener noreferrer">坚果云收件箱</a> 是一个集 PC/Mobile/小程序 3端，帮助像老师、领导、群主、导师这类人去解决如何 收集文件/问卷/作业 和 数据整理 的工具型软件
					</div>}/>
					<WithDot text={<div>
						<a href="https://workspace.jianguoyun.com" target="_blank" rel="noopener noreferrer">收件箱</a> 整体使用人数从 9 月到翌年 2 月使用人数维持在 40% 左右的快速增长，从均日活 4W  增长至今日活 20W  左右，后续推出的 问卷设计器 功能和 模板 功能都对增长起到关键作用
					</div>}/>
					<WithDot text={<div>
						领导 <a href="https://workspace.jianguoyun.com" target="_blank" rel="noopener noreferrer">收件箱</a> 项目的渐进式重构，确保产品在需求不断迭代的同时，局部重构旧代码和改善开发体验。函数组件重写类组件，逐步将 Webpack 迁移至 Vite/Webpack（Vite开发，Webpack打包）, 添加 Typescript 支持
					</div>}/>
					<WithDot text={<div>
						使用到的技术栈包括：React，Remax，Svelte， Typescript，Spreadjs，Vite，Webpack，Ramdajs，期间 Ramdajs 的v0.27-v0.28版本更新的 <a href="https://ramda.cn/#funding" target="_blank">中文翻译</a>由个人完成，也参与讨论和改善其它版本的翻译
					</div>}/>
					<WithDot text={<div>
						对函数式编程有自己独到的理解，喜欢研究像 Ramdajs、Rxjs、Node Stream、React 学习它们的思想应用于平时的日常编程中
					</div>}/>
				</div>
				<div>
					<div className='flex px-3 font-medium mb-4'>
						<span>前端工程师</span>
						<span className='flex-1'></span>
						<span><a href="https://forensix.cn/" target="_blank" rel="noopener noreferrer">上海弘连网络科技有限公司</a></span>
						<span className='flex-1'></span>
						<span>2018/09/01 — 2021/03/19</span>
					</div>
					<WithDot text={<div>
						参与公司<a href="https://forensix.cn/products/info.aspx?itemid=1134&lcid=6" target="_blank" rel="noopener noreferrer">雷电系列产品</a>的研发工作，主打产品 <a href="" target="_blank" rel="noopener noreferrer">雷电手机快取/采集</a> 是一款智能设备数据采集的桌面应用
					</div>}/>
					<WithDot text={<div>
						<a href="https://forensix.cn/products/info.aspx?itemid=1134&lcid=6" target="_blank" rel="noopener noreferrer">雷电手机快取</a>
						多次协助警方提取传销团伙、犯罪嫌疑人手机原始数据；衍生产品 海星手机扩展阵列 参与第十届中国国际警用装备博览会
					</div>}/>
					<WithDot text={<div>
						使用到的技术栈包括：Vue全家桶、Electron、Websocket、Ag-Grid、Element-UI、Webpack、Vue-Create-Api，随着项目的沉淀也曾在公司内分享过 Vue 源码的相关技术 Vue 插件编写技术
					</div>}/>
					<WithDot text={<div>
						模仿 Vscode 左侧树逻辑，使用基于第三方的虚拟列表组件二次封装实现的虚拟树用来解决大数据量节点造成页面卡顿问题、使用 Vue-Create-Api 封装项目 Modal 逻辑、使用 Jsx 替代 Template 实现复杂组件逻辑、手写实现简单的 Vuex 用于特殊页面
					</div>}/>
				</div>
			</div>
		</div>
		<div className="deucation">
			<div className='flex items-center mb-4'>
				<span className='text-[#0b65c3] font-bold mr-3'>Education</span>
				<div className="flex-1 bg-[#999] tet" style={{height: '1px'}} ></div>
			</div>
			<div className='text-xs'>
				<div className='mb-3'>
					<div className='flex px-3 font-medium mb-3'>
						<span>计算机科学与技术专业</span>
						<span className='flex-1'></span>
						<span><a href="https://www.jianguoyun.com/" target="_blank" rel="noopener noreferrer">铜陵学院</a></span>
						<span className='flex-1'></span>
						<span>2013/07/01 — 2017/07/01</span>
					</div>
				</div>
			</div>
		</div>
		<div className="about me">
			<div className='flex items-center mb-4'>
				<span className='text-[#0b65c3] font-bold mr-3'>Self-assessment</span>
				<div className="flex-1 bg-[#999] tet" style={{height: '1px'}} ></div>
			</div>
			<div className='text-xs'>
				<WithDot text={'具有较强的自学能力（居家自学前端后入职第一家公司，进入第二家公司后所使用到的 React、Typescript、小程序在此之前并没有相关的经验）；一定的抗压能力；对于框架和库的理解不局限于使用层面，对于自己感兴趣的框架会深入研究；时刻关注最前沿的技术与走向，但缺少自己沉淀和输出，这一点正在改善'}/>
				
			</div>
		</div>
	</div>
}

 

function WithDot(props) {
	return <div className='flex items-center mb-3'>
		<span className=' mx-2 w-1 h-1 rounded-full bg-[#0b65c3] flex-shrink-0'></span>
		<p style={{
			lineHeight: '1.8'
		}}>{props.text}</p>
	</div>
}