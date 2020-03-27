#!/bin/sh
cd `dirname $0`
ROOT_PATH=`pwd`
java -Dtalend.component.manager.m2.repository=$ROOT_PATH/../lib -Xms256M -Xmx1024M -Dfile.encoding=UTF-8 -cp .:$ROOT_PATH:$ROOT_PATH/../lib/routines.jar:$ROOT_PATH/../lib/log4j-jcl-2.12.1.jar:$ROOT_PATH/../lib/log4j-slf4j-impl-2.12.1.jar:$ROOT_PATH/../lib/log4j-api-2.12.1.jar:$ROOT_PATH/../lib/log4j-core-2.12.1.jar:$ROOT_PATH/../lib/log4j-1.2-api-2.12.1.jar:$ROOT_PATH/../lib/commons-collections-3.2.2.jar:$ROOT_PATH/../lib/jboss-serialization.jar:$ROOT_PATH/../lib/commons-beanutils-1.8.3.jar:$ROOT_PATH/../lib/jaxen-1.1.6.jar:$ROOT_PATH/../lib/xom-1.2.7.jar:$ROOT_PATH/../lib/advancedPersistentLookupLib-1.2.jar:$ROOT_PATH/../lib/slf4j-api-1.7.25.jar:$ROOT_PATH/../lib/dom4j-2.1.1.jar:$ROOT_PATH/../lib/commons-lang-2.6.jar:$ROOT_PATH/../lib/mongo-java-driver-3.12.0.jar:$ROOT_PATH/../lib/ezmorph-1.0.6.jar:$ROOT_PATH/../lib/json-lib-2.4.5-talend.jar:$ROOT_PATH/../lib/trove.jar:$ROOT_PATH/../lib/commons-logging-1.1.1.jar:$ROOT_PATH/../lib/crypto-utils.jar:$ROOT_PATH/dim_temps_0_1.jar: test_project.dim_temps_0_1.dim_temps  "$@"