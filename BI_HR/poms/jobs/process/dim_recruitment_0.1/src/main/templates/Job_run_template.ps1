$fileDir = Split-Path -Parent $MyInvocation.MyCommand.Path
cd $fileDir
java '-Dtalend.component.manager.m2.repository=%cd%/../lib' '-Xms256M' '-Xmx1024M' '-Dfile.encoding=UTF-8' -cp '.;../lib/routines.jar;../lib/log4j-jcl-2.12.1.jar;../lib/log4j-slf4j-impl-2.12.1.jar;../lib/log4j-api-2.12.1.jar;../lib/log4j-core-2.12.1.jar;../lib/commons-beanutils-1.8.3.jar;../lib/jaxen-1.1.6.jar;../lib/xom-1.2.7.jar;../lib/slf4j-api-1.7.25.jar;../lib/dom4j-2.1.1.jar;../lib/commons-collections-3.2.2.jar;../lib/commons-lang-2.6.jar;../lib/mongo-java-driver-3.12.0.jar;../lib/ezmorph-1.0.6.jar;../lib/json-lib-2.4.5-talend.jar;../lib/commons-logging-1.1.1.jar;../lib/crypto-utils.jar;dim_recruitment_0_1.jar;' bi_hr.dim_recruitment_0_1.dim_recruitment  $args