---
layout: zh/default
---
<h2>开发指南</h2>



<h3>开发工具及相关软件</h3>

<table border="0" class="table table-striped table-bordered ">
	<thead>
		<th  >软件</th><th>版本</th><th>备注</th>
	</thead>
	<tbody>
		<tr>
			<td>JDK</td>
			<td>17 +</td>
			<td>JAVA运行及开发工具包</td>
		</tr>
		<tr>
			<td>Node.js</td>
			<td>v 20 LTS +</td>
			<td>Node.js开发工具包</td>
		</tr>
		<tr>
			<td>eclipse-jee</td>
			<td>2025-06 +</td>
			<td>推荐JAVA开发工具</td>
		</tr>
		<tr>
			<td>Visual Studio Code</td>
			<td>Version 1.66 +</td>
			<td>推荐前端开发工具</td>
		</tr>
		<tr>
			<td>MySQL</td>
			<td>8.4.0 +</td>
			<td>数据库服务器</td>
		</tr>
		<tr>
			<td>Gradle</td>
			<td>8.8+ </td>
			<td>代码构建</td>
		</tr>
		<tr>
			<td>Tomcat/tomcat-embed</td>
			<td>10 +</td>
			<td>应用服务器</td>
		</tr>
	</tbody>
</table>		
 
<h3>程序目录</h3>

<table border="0" class="table table-striped table-bordered ">
	<thead>
		<th  >JinBooks</th><th>一级目录</th><th>二级目录</th><th>三级目录</th><th>说明</th>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td>README.md</td>
			<td></td>
			<td></td>
			<td>关于JinBooks项目介绍</td>
		</tr>
		<tr>
			<td></td>
			<td>LICENSE</td>
			<td></td>
			<td></td>
			<td>Apache License v2许可证</td>
		</tr>
		<tr>
			<td></td>
			<td>CHANGELOG.md</td>
			<td></td>
			<td></td>
			<td>版本发布记录描述</td>
		</tr>
		<tr>
			<td></td>
			<td>images</td>
			<td></td>
			<td></td>
			<td>图片</td>
		</tr>
		<tr>
			<td></td>
			<td>jinbooks</td>
			<td></td>
			<td></td>
			<td>jinbooks java工程</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td>jinbooks-commons</td>
			<td></td>
			<td>公共包</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-authn-core</td>
			<td>认证核心包</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-authn-provider</td>
			<td>认证提供者</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-common</td>
			<td>通用包</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-crypto</td>
			<td>加解密</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td>jinbooks-core</td>
			<td></td>
			<td>核心实体</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td>jinbooks-persistence</td>
			<td></td>
			<td>数据库持久层</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td>jinbooks-starter</td>
			<td></td>
			<td>公共starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-captcha</td>
			<td>图像验证码starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-ip2location</td>
			<td>ip地址转换starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-oss</td>
			<td>对象存储starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-otp</td>
			<td>一次性口令starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-sms</td>
			<td>手机短信starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-web</td>
			<td>后端web公共starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td>jinbooks-starter-xss</td>
			<td>XXS防控starter</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td>jinbooks-web</td>
			<td></td>
			<td>web后端java工程</td>
		</tr>
		<tr>
			<td></td>
			<td>jinbooks-ui</td>
			<td></td>
			<td></td>
			<td>web前端</td>
		</tr>
		<tr>
			<td></td>
			<td>sql</td>
			<td></td>
			<td></td>
			<td>数据库MYSQL脚本,GA版本对应SQL</td>
		</tr>
		</tbody>
</table>

### 开发环境应用启动

### 后端java web项目启动
在开发工具导入jinbooks目录

com.jinbooks.JinBooksApplication

### 前端jinbooks-ui

开发工具jinbooks-ui目录

1) 安装依赖

```bash
npm install
```

2) 启动开发服务器

```bash
npm run dev
```

3) 开发服务器将在本地启动，默认地址通常为：

```
http://localhost:3154
```

4) 构建与部署

4.1) 构建生产版本

```bash
npm run build
```

4.2) 部署到服务器

将 `dist` 目录中的文件上传至你的服务器，并配置相应的 Web 服务（如 Nginx）。



## 问题排查

若运行或构建过程中出现问题，请尝试以下操作：

1. 确保已正确安装 Node.js 和 npm

2. 检查网络连接，确保可以正常访问 npm 仓库

3. 清理缓存后重新安装依赖：

   ```bash
   npm cache clean --force
   npm install
   ```

4. 查看控制台错误信息并定位问题

如仍未解决，请提交 Issue 或联系维护者。

## 清理缓存

如果需要清理 npm 缓存，可执行以下命令：

```bash
npm cache clean --force
```
