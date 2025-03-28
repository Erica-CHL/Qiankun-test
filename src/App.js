import './App.css';
import { registerMicroApps,start } from 'qiankun';

function App() {
  return (
   <div>
      <div>
        <div>
           <a href='/'>主应用</a>
        </div>
         <div>
           <a href='/micro-app1'>微应用1</a>
         </div>
       
      </div>
      <div>
         <div id="root-content">主内容区域</div>
         <div id="micro-container">微应用区域</div>
      </div>
   </div>
  );
}

// 注册微应用
registerMicroApps([
  {
    name: 'micro-app1', // 微应用名称（唯一）
    entry: process.env.NODE_ENV === 'development' 
      ? '//localhost:3001' 
      : '/micro-app1/', // 生产环境路径
    container: '#micro-container', // 容器ID
    activeRule: '/micro-app1', // 激活路径（通过URL访问）
    props: { 
      // 可传递全局数据给微应用
      basePath: '/micro-app1'
    }
  }
]);

start()

export default App;
