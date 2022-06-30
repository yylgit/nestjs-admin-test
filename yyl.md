https://github.com/Theodo-UK/nestjs-admin


1 按照说明 先生成对应的表， 可以不用迁移， 直接先把表创建了  而且它这里的-n也不对
它的目的就是先把这个表创建了，这里用的是迁移的命令 但是 这个命令不对，我用asyncnize的方式先同步的表

然后执行它的命令 去插入一个用户 但是最后调用的findOne方法 
npx nestjs-admin createAdminUser
默认读取的文件





 "typeorm": "^0.3.6"
必须有where 所以报错，降级typeorm试一下  降级到它的demo中的版本 yarn add typeorm@0.2.19



管理用户创建的用户名和密码也有问题： https://github.com/Theodo-UK/nestjs-admin/issues/213
可以通过这个网站生成 然后自己插入到数据库中： https://bcrypt-generator.com/
