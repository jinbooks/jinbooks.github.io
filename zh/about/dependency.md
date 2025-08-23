---
layout: zh/default
---

<h3>项目依赖</h3>
<h3>项目软件</h3>

<table border="0" class="table table-striped table-bordered ">
    <thead>
        <tr>
            <th>SoftWare</th>
			<th>Version</th>
            <th>Introduction</th>
            <th>License</th></tr>
    </thead>
    <tbody>
        <tr>
            <td>MySQL Community Server</td>
			<td>8.4.*</td>
            <td>
			MySQL is the most trusted and widely used open source database platform in use today. 10 out of the top 10 most popular and highly-trafficked websites in the world rely on MySQL. <br>
			home page: https://www.mysql.com/</td>
            <td>GNU General Public License v2.0</td>
		</tr>
		<tr>
            <td>OpenJDK</td>
			<td>17</td>
            <td>
			The place to collaborate on an open-source implementation of the Java Platform, Standard Edition, and related projects,open-source JDK for most popular Linux distributions. Oracle's free, GPL-licensed, production-ready OpenJDK JDK 8 binaries are at jdk.java.net/8; Oracle's commercially-licensed JDK 8 binaries for Linux, macOS, and Windows, based on the same code
			<br>
            home page: http://openjdk.java.net/</td>
            <td>GNU General Public License v2.0</td>
		</tr>
        <tr>
            <td>Eclipse Temurin</td>
			<td>17</td>
            <td>
            Eclipse Temurin is the open source Java SE build based upon OpenJDK. Temurin is available for a wide range of platforms and Java SE versions.
            <br>
            home page: https://adoptium.net/</td>
            <td>Eclipse Public License - v 2.0</td>
		</tr>
		<tr>
            <td>Node.js</td>
			<td>Node.js v20+</td>
            <td>
			Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
			<br>
            home page: https://nodejs.org/</td>
            <td>MIT License</td>
		</tr>
		<tr>
            <td>Tomcat/Tomcat-embed</td>
			<td>10.0.*</td>
            <td>
			The Apache Tomcat® software is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies. The Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket specifications are developed under the Java Community Process.
			<br>
            home page: https://tomcat.apache.org/</td>
            <td>Apache License 2.0</td>
		</tr>
		<tr>
            <td>nginx</td>
			<td>1.21.*</td>
            <td>
			nginx [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, originally written by Igor Sysoev.
			<br>
            home page: http://nginx.org/</td>
            <td>2-clause BSD-like license</td>
		</tr>
		<tr>
            <td>Gradle</td>
			<td>8.*</td>
            <td>
			Gradle is an open-source build automation tool focused on flexibility and performance. Gradle build scripts are written using a Groovy or Kotlin DSL. Read about Gradle features to learn what is possible with Gradle.
            <br>        
            home page: https://gradle.org/</td>
            <td>Apache License 2.0</td>
    	</tr>
    	<tr>
            <td>Eclipse</td>
    		<td>eclipse-jee-2025-06</td>
            <td>
    		The Eclipse IDE is famous for our Java Integrated Development Environment (IDE), but we have a number of pretty cool IDEs, including our C/C++ IDE, JavaScript/TypeScript IDE, PHP IDE, and more.
            <br>  
            home page: https://www.eclipse.org/</td>
            <td>Eclipse Public License - v 2.0</td>
    	</tr>
    	<tr>
            <td>Visual Studio Code</td>
    		<td>VSCode Version 1.66</td>
            <td>
    		Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux
            <br>        
            home page: https://code.visualstudio.com/</td>
            <td>MIT license </td>
    	</tr>

    </tbody>

</table>

<h3>项目依赖包</h3>

以下是此项目的项目依赖中的编译依赖项列表。这些依赖项可以包含在子模块中，以编译和运行子模块：

<table border="0" class="table table-striped table-bordered ">
    <thead>
        <tr>
            <th>GroupId</th>
            <th>ArtifactId</th>
            <th>Version</th>
            <th>Type</th>
            <th>License</th></tr>
    </thead>
    <tbody>
        <tr>
            
            <td>junit</td>
            <td>junit</td>
            <td>{{site.junitVersion}}</td>
            <td>jar</td>
            <td>EPL 1.0</td></tr>
        <tr>
            
            <td>javax.servlet</td>
            <td>javax.servlet-api</td>
            <td>3.0.1</td>
            <td>jar</td>
            <td>GPL 2.0</td></tr>
        <tr>
            
            <td>org.mockito</td>
            <td>mockito-all</td>
            <td>{{site.mockitoallVersion}}</td>
            <td>jar</td>
            <td>MIT</td></tr>
        <tr>
            
            <td>xmlunit</td>
            <td>xmlunit</td>
            <td>{{site.xmlunitVersion}}</td>
            <td>jar</td>
            <td>BSD</td></tr>
        <tr>
            
            <td>commons-beanutils</td>
            <td>commons-beanutils</td>
            <td>{{site.commonsbeanutilsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-codec</td>
            <td>commons-codec</td>
            <td>{{site.commonscodecVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-collections</td>
            <td>commons-collections</td>
            <td>{{site.commonscollectionsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
		<tr>
            
            <td>org.apache.commons</td>
            <td>commons-collections4</td>
            <td>{{site.commonscollections4Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
		<tr>
            
            <td>org.apache.commons</td>
            <td>commons-compress</td>
            <td>{{site.commonscompressVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>	
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-csv</td>
            <td>{{site.commonscsvVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
		<tr>
            
            <td>org.apache.commons </td>
            <td>commons-text</td>
            <td>{{site.commonstextVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-dbcp2</td>
            <td>{{site.commonsdbcp2Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-dbutils</td>
            <td>commons-dbutils</td>
            <td>{{site.commonsdbutilsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-digester3</td>
            <td>{{site.commonsdigester3Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-digester</td>
            <td>commons-digester</td>
            <td>{{site.commonsdigesterVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-io</td>
            <td>commons-io</td>
            <td>{{site.commonsioVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-lang</td>
            <td>commons-lang</td>
            <td>{{site.commonslangVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-lang3</td>
            <td>{{site.commonslang3Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-logging</td>
            <td>commons-logging</td>
            <td>{{site.commonsloggingVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-pool2</td>
            <td>{{site.commonspool2Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-httpclient</td>
            <td>commons-httpclient</td>
            <td>{{site.commonshttpclientVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>commons-fileupload</td>
            <td>commons-fileupload</td>
            <td>{{site.commonsfileuploadVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>commons-email</td>
            <td>{{site.commonsemailVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.httpcomponents</td>
            <td>httpclient</td>
            <td>{{site.httpcomponentsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.httpcomponents</td>
            <td>fluent-hc</td>
            <td>{{site.httpcomponentsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.httpcomponents</td>
            <td>httpclient-cache</td>
            <td>{{site.httpcomponentsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.httpcomponents</td>
            <td>httpmime</td>
            <td>{{site.httpcomponentsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.httpcomponents</td>
            <td>httpcore</td>
            <td>{{site.httpcoreVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.velocity</td>
            <td>velocity</td>
            <td>{{site.velocityVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>velocity</td>
            <td>velocity-dep</td>
            <td>{{site.velocitydepVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.freemarker</td>
            <td>freemarker</td>
            <td>{{site.freemarkerVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.commons</td>
            <td>not-yet-commons-ssl</td>
            <td>0.3.9</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
		<tr>
            
            <td> org.apache.poi</td>
            <td>
				poi              <br/>
				poi-scratchpad   <br/>
				poi-ooxml        <br/>
				poi-ooxml-schemas
				</td>
            <td>{{site.poiVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>

    	<tr>
            
            <td> org.apache.xmlbeans</td>
            <td>xmlbeans</td>
            <td>{{site.xmlbeansVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>

        <tr>
            
            <td>org.apache.logging.log4j</td>
            <td>
    			log4j-1.2-api    <br/>
    			log4j-api        <br/>
    			log4j-core       <br/>
    			log4j-jcl        <br/>
    			log4j-jul        <br/>
    			log4j-slf4j-impl <br/>
    			log4j-web
    		</td>
            <td>{{site.log4jVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.slf4j</td>
            <td>slf4j-api</td>
            <td>{{site.slf4jVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.jboss.logging</td>
            <td>jboss-logging</td>
            <td>{{site.jbossloggingVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework</td>
            <td>
    			spring-aop                  <br/>
    			spring-aspects              <br/>
    			spring-beans                <br/>
    			spring-core                 <br/>
    			spring-context              <br/>
    			spring-context-indexer      <br/>
    			spring-context-support      <br/>
    			spring-expression           <br/>
    			spring-instrument           <br/>
    			spring-jcl                  <br/>
    			spring-jdbc                 <br/>
    			spring-jms                  <br/>
    			spring-messaging            <br/>
    			spring-orm                  <br/>
    			spring-oxm                  <br/>
    			spring-tx                   <br/>
    			spring-web                  <br/>
    			spring-webflux              <br/>
    			spring-webmvc               <br/>
    			spring-websocket            <br/>
    			spring-test
    		</td>
            <td>{{site.springVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.kafka</td>
            <td>kafka-clients</td>
            <td>{{site.kafkaclientsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework.kafka</td>
            <td>spring-kafka</td>
            <td>{{site.springkafkaVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework.retry</td>
            <td>spring-retry</td>
            <td>{{site.springretryVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework.security</td>
            <td>
    			spring-security-core<br/>
    			spring-security-web<br/>
    			spring-security-crypto
    		</td>
            <td>{{ site.springSecurityVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework.boot</td>
            <td>
    			spring-boot<br/>
    			spring-boot-starter<br/>
    			spring-boot-actuator<br/>
    			spring-boot-autoconfigure<br/>
    			spring-boot-starter-freemarker<br/>
    			spring-boot-starter-log4j2<br/>
    			spring-boot-starter-web<br/>
    			spring-boot-starter-tomcat<br/>
    			spring-boot-starter-test
    		</td>
            <td>{{ site.springBootVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td>
    	</tr>

    	<tr>
            
            <td>org.springframework.security</td>
            <td>spring-security-oauth</td>
            <td>2.5.1</td>
            <td>jar</td>
            <td>Apache-2.0</td>
    	</tr>
    	<tr>
            
            <td>org.springframework.data</td>
            <td>
    			spring-data-commons<br/>
    			spring-data-keyvalue<br/>
    			spring-data-redis
    			</td>
            <td>{{ site.springDataVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>

    	<tr>
            
            <td>org.springframework.plugin</td>
            <td>spring-plugin-core</td>
            <td>{{ site.springplugincoreVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>org.springframework.plugin</td>
            <td>spring-plugin-metadata</td>
            <td>{{ site.springpluginmetadataVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>org.springframework.session</td>
            <td>spring-session-core</td>
            <td>{{ site.springSessionVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.springframework.session</td>
            <td>spring-session-data-redis</td>
            <td>{{ site.springSessionVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.opensaml</td>
            <td>opensaml</td>
            <td>{{site.opensamlVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.opensaml</td>
            <td>openws</td>
            <td>{{site.openwsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.opensaml</td>
            <td>xmltooling</td>
            <td>{{site.xmltoolingVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>net.shibboleth.utilities</td>
            <td>java-support</td>
            <td>{{site.javasupportVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.nimbusds</td>
            <td>nimbus-jose-jwt</td>
            <td>{{site.nimbusjosejwtVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>net.jcip</td>
            <td>jcip-annotations</td>
            <td>{{site.jcipannotationsVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>net.minidev</td>
            <td>json-smart</td>
            <td>{{site.minidevjsonsmartVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>net.minidev</td>
            <td>asm</td>
            <td>{{site.minidevasmVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.xkcoding.http</td>
            <td>simple-http</td>
            <td>{{site.simplehttpVersion}}</td>
            <td>jar</td>
            <td>LGPL 3.0</td></tr>
        <tr>
            
            <td>me.zhyd.oauth</td>
            <td>JustAuth</td>
            <td>{{site.JustAuthVersion}}</td>
            <td>jar</td>
            <td>MIT</td></tr>
        <tr>
            
            <td>org.javassist</td>
            <td>javassist</td>
            <td>{{site.javassistVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.owasp.esapi</td>
            <td>esapi</td>
            <td>{{site.esapiVersion}}</td>
            <td>jar</td>
            <td>BSD 2-clause</td></tr>
        <tr>
            
            <td>com.sun.mail</td>
            <td>javax.mail</td>
            <td>{{site.javaxmailVersion}}</td>
            <td>jar</td>
            <td>GPL 2.0</td></tr>
        <tr>
            
            <td>org.eclipse.persistence</td>
            <td>javax.persistence</td>
            <td>{{site.javaxpersistenceVersion}}</td>
            <td>jar</td>
            <td>Eclipse Public License v. 2.0</td></tr>
        <tr>
            
            <td>javax.activation</td>
            <td>activation</td>
            <td>{{site.activationVersion}}</td>
            <td>jar</td>
            <td>CDDL 1.0</td></tr>
        <tr>
            
            <td>javax.annotation</td>
            <td>javax.annotation-api</td>
            <td>{{site.javaxannotationapiVersion}}</td>
            <td>jar</td>
            <td>GPLv2</td></tr>
        <tr>
            
            <td>javax.transaction</td>
            <td>jta</td>
            <td>{{site.jtaVersion}}</td>
            <td>jar</td>
            <td>GPLv2</td></tr>
        <tr>
            
            <td>javax.transaction</td>
            <td>javax.transaction-api</td>
            <td>{{site.javaxtransactionapiVersion}}</td>
            <td>jar</td>
            <td>GPLv2</td></tr>
        <tr>
            
            <td>javax.validation</td>
            <td>validation-api</td>
            <td>{{site.validationapiVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>javax.xml</td>
            <td>jsr173</td>
            <td>{{site.jsr173Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>javax.xml.bind</td>
            <td>jaxb-api</td>
            <td>{{site.jaxbapiVersion}}</td>
            <td>jar</td>
            <td>CDDL 1.1</td></tr>
        <tr>
            
            <td>com.sun.xml.bind</td>
            <td>jaxb-core</td>
            <td>{{site.jaxbcoreVersion}}</td>
            <td>jar</td>
            <td>Eclipse Distribution License - v 1.0</td></tr>
        <tr>
            
            <td>com.sun.xml.bind</td>
            <td>jaxb-impl</td>
            <td>{{site.jaxbimplVersion}}</td>
            <td>jar</td>
            <td>Eclipse Distribution License - v 1.0</td></tr>
        <tr>
            
            <td>com.sun.xml.bind</td>
            <td>jaxb-xjc</td>
            <td>{{site.jaxbxjcVersion}}</td>
            <td>jar</td>
            <td>Eclipse Distribution License - v 1.0</td></tr>
        <tr>
            
            <td>org.bouncycastle</td>
            <td>bcpkix-jdk15on</td>
            <td>{{site.bouncycastleVersion}}</td>
            <td>jar</td>
            <td>Bouncy Castle Licence</td></tr>
        <tr>
            
            <td>org.bouncycastle</td>
            <td>bcprov-jdk15on</td>
            <td>{{site.bouncycastleVersion}}</td>
            <td>jar</td>
            <td>Bouncy Castle Licence</td></tr>
        <tr>
            
            <td>org.bouncycastle</td>
            <td>bcprov-ext-jdk15on</td>
            <td>{{site.bouncycastleVersion}}</td>
            <td>jar</td>
            <td>Bouncy Castle Licence</td></tr>
        <tr>
            
            <td>com.google.crypto.tink</td>
            <td>tink</td>
            <td>{{site.tinkVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.jhlabs</td>
            <td>filters</td>
            <td>{{site.jhlabsfiltersVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.github.penggle</td>
            <td>kaptcha</td>
            <td>{{site.kaptchaVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.google.code.gson</td>
            <td>gson</td>
            <td>{{site.gsonVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.fasterxml.jackson.core</td>
            <td>
    			jackson-annotations <br/>
    			jackson-core        <br/>
    			jackson-databind
    		</td>
            <td>{{site.jacksonVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>

        <tr>
            
            <td>com.fasterxml</td>
            <td>classmate</td>
            <td>{{site.classmateVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.alibaba</td>
            <td>fastjson</td>
            <td>{{site.fastjsonVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.reactivestreams</td>
            <td>reactive-streams</td>
            <td>{{site.reactivestreamsVersion}}</td>
            <td>jar</td>
            <td>CC0 1.0</td></tr>
        <tr>
            
            <td>io.projectreactor</td>
            <td>reactor-core</td>
            <td>{{site.reactorcoreVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>eu.tekul</td>
            <td>szxcvbn_2.9.2</td>
            <td>{{site.szxcvbnVersion}}</td>
            <td>jar</td>
            <td>MIT</td></tr>
        <tr>
            
            <td>org.quartz-scheduler</td>
            <td>quartz</td>
            <td>{{site.quartzVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>mysql</td>
            <td>mysql-connector-java</td>
            <td>{{site.mysqlconnectorjavaVersion}}</td>
            <td>jar</td>
            <td>GPL 2.0</td></tr>
    	<tr>
            
            <td>org.postgresql</td>
            <td>postgresql</td>
            <td>{{site.postgresqlVersion}}</td>
            <td>jar</td>
            <td>BSD-2-Clause</td></tr>
        <tr>
            
            <td>com.alibaba</td>
            <td>druid</td>
            <td>{{site.druidVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.alibaba</td>
            <td>druid-spring-boot-starter</td>
            <td>{{site.druidspringbootstarterVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>redis.clients</td>
            <td>jedis</td>
            <td>{{site.jedisVersion}}</td>
            <td>jar</td>
            <td>MIT</td></tr>
        <tr>
            
            <td>org.ehcache</td>
            <td>ehcache</td>
            <td>{{site.ehcacheVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.mybatis</td>
            <td>mybatis</td>
            <td>{{site.mybatisVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.mybatis</td>
            <td>mybatis-spring</td>
            <td>{{site.mybatisspringVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.hibernate.validator</td>
            <td>hibernate-validator</td>
            <td>{{site.hibernateVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.hibernate</td>
            <td>hibernate-validator-cdi</td>
            <td>{{site.hibernateVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.hibernate.validator</td>
            <td>hibernate-validator-annotation-processor</td>
            <td>{{site.hibernateVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>joda-time</td>
            <td>joda-time</td>
            <td>{{site.jodatimeVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.yaml</td>
            <td>snakeyaml</td>
            <td>1.26</td>
            <td>{{site.snakeyamlVersion}}</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>net.sourceforge.nekohtml</td>
            <td>nekohtml</td>
            <td>{{site.nekohtmlVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.jdom</td>
            <td>jdom</td>
            <td>{{site.jdomVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.google.zxing</td>
            <td>core</td>
            <td>{{site.zxingcoreVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.google.guava</td>
            <td>guava</td>
            <td>{{site.guavaVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>ognl</td>
            <td>ognl</td>
            <td>{{site.ognlVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>cglib</td>
            <td>cglib</td>
            <td>{{site.cglibVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td>
    	</tr>
    	<tr>
            
            <td>org.lionsoul</td>
            <td>ip2region</td>
            <td>1.7.2</td>
            <td>jar</td>
            <td>Apache-2.0</td>
    	</tr>
        <tr>
            
            <td>org.ow2.asm</td>
            <td>asm</td>
            <td>{{site.asmVersion}}</td>
            <td>jar</td>
            <td>BSD 3-clause</td></tr>
        <tr>
            
            <td>aopalliance</td>
            <td>aopalliance</td>
            <td>{{site.aopallianceVersion}}</td>
            <td>jar</td>
            <td>Public</td></tr>
        <tr>
            
            <td>org.aspectj</td>
            <td>aspectjtools</td>
            <td>{{site.aspectjtoolsVersion}}</td>
            <td>jar</td>
            <td>EPL 1.0</td></tr>
        <tr>
            
            <td>dom4j</td>
            <td>dom4j</td>
            <td>{{site.dom4jVersion}}</td>
            <td>jar</td>
            <td>BSD</td></tr>
        <tr>
            
            <td>xalan</td>
            <td>serializer</td>
            <td>{{site.serializerVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>xml-resolver</td>
            <td>xml-resolver</td>
            <td>{{site.xmlresolverVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.santuario</td>
            <td>xmlsec</td>
            <td>{{site.xmlsecVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.ogce</td>
            <td>xpp3</td>
            <td>{{site.xpp3Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>com.thoughtworks.xstream</td>
            <td>xstream</td>
            <td>{{site.xstreamVersion}}</td>
            <td>jar</td>
            <td>BSD 3-clause</td></tr>
    	<tr>
            
            <td>org.passay</td>
            <td>passay</td>
            <td>{{site.passayVersion}}</td>
            <td>jar</td>
            <td>Apache 2.0 & LGPL 3.0</td></tr>
    	<tr>
            
            <td>io.micrometer</td>
            <td> micrometer-core</td>
            <td>{{site.micrometercoreVersion}}</td>
            <td>jar</td>
            <td>Apache 2.0 </td></tr>
    	<tr>
            
            <td>org.latencyutils</td>
            <td> LatencyUtils</td>
            <td>{{site.LatencyUtilsVersion}}</td>
            <td>jar</td>
            <td>CC0 1.0 </td></tr>
    	<tr>
            
            <td>org.codehaus.woodstox</td>
            <td> stax2-api</td>
            <td>{{site.stax2apiVersion}}</td>
            <td>jar</td>
            <td>	BSD 2-clause </td></tr>
    	<tr>
            
            <td>org.mapstruct</td>
            <td> mapstruct</td>
            <td>{{site.mapstructVersion}}</td>
            <td>jar</td>
            <td>Apache 2.0 </td></tr>
        <tr>
            
            <td>com.aliyun</td>
            <td>aliyun-java-sdk-core</td>
            <td>{{site.aliyunjavasdkcoreVersion}}</td>
            <td>jar</td>
            <td>Aliyun </td></tr>
        <tr>
            
            <td>com.tencentcloudapi</td>
            <td>tencentcloud-sdk-java</td>
            <td>{{site.tencentcloudsdkjavaVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.tomcat.embed</td>
            <td>tomcat-embed-core</td>
            <td>{{site.tomcatVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
        <tr>
            
            <td>org.apache.tomcat.embed</td>
            <td>tomcat-embed-logging-juli</td>
            <td>{{site.tomcatembedloggingjuliVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	 <tr>
            
            <td>mybatis-jpa-extra</td>
            <td>mybatis-jpa-extra</td>
            <td>2.3</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>mybatis-jpa-extra</td>
            <td>mybatis-jpa-extra-spring-boot-starter</td>
            <td>6.0.4.jre8</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>com.highgo</td>
            <td>HgdbJdbc</td>
            <td>2.3</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>gradle.plugin.com.google.cloud.tools</td>
            <td>jib-gradle-plugin</td>
            <td>{{site.jibGradlePluginVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>io.swagger</td>
            <td>swagger-annotations<br/>
    			swagger-models</td>
            <td>{{site.swaggerVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>io.swagger.core.v3</td>
            <td>
    			swagger-annotations<br/>
    			swagger-core<br/>
    			swagger-integration<br/>
    			swagger-models<br/>
    		</td>
            <td>{{site.swaggerV3Version}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>io.springfox</td>
            <td>
    			springfox-bean-validators<br/>
    			springfox-core<br/>
    			springfox-data-rest<br/>
    			springfox-spi<br/>
    			springfox-oas<br/>
    			springfox-schema<br/>
    			springfox-swagger2<br/>
    			springfox-swagger-ui<br/>
    			springfox-swagger-common<br/>
    			springfox-spring-webmvc<br/>
    			springfox-spring-web<br/>
    			springfox-spring-webflux<br/>
    			springfox-boot-starter
    		</td>
            <td>{{site.springfoxVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td></tr>
    	<tr>
            
            <td>com.github.xiaoymin</td>
            <td>
    			knife4j-annotations<br/>
    			knife4j-core<br/>
    			knife4j-spring-mvc<br/>
    			knife4j-spring<br/>
    			knife4j-spring-ui<br/>
    			knife4j-spring-boot-starter<br/>
    			knife4j-spring-boot-autoconfigure
    		</td>
            <td>{{site.knife4jVersion}}</td>
            <td>jar</td>
            <td>Apache-2.0</td>
    	</tr>


    </tbody>

</table>

前端组件依赖

<table border="0" class="table table-striped table-bordered ">
    <thead>
        <tr>
            <th>Component</th>
            <th>Version</th>
            <th>Type</th>
            <th>License</th></tr>
    </thead>
    <tbody>
		<tr>
            <td>vue</td>
            <td>3.4.31</td>
            <td>typescript</td>
            <td>MIT-style License</td>
		</tr>
		<tr>
            <td>vue-i18n</td>
            <td>10.0.0</td>
            <td>typescript</td>
            <td>MIT</td>
		</tr>	
		<tr>
            <td>vue-router</td>
            <td>4.4.0</td>
            <td>typescript</td>
            <td>MIT</td>
		</tr>	
		<tr>
            <td>element-plus</td>
            <td>2.9.9</td>
            <td>typescript</td>
            <td>MIT License</td>
		</tr>	
		<tr>
            <td>echarts</td>
            <td>5.6.0</td>
            <td>javascript</td>
            <td>Apache-2</td>
		</tr>
    </tbody>
</table>
