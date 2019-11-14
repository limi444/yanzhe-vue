"""
Django settings for yanzheblog project.

Generated by 'django-admin startproject' using Django 2.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os
import sys
from yanzhe.utils.yz_utils import configurator

VERSION = '${version}'

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, BASE_DIR)
sys.path.insert(1, os.path.join(BASE_DIR, 'apps'))
sys.path.insert(2, os.path.join(BASE_DIR, 'extra_apps'))
sys.path.insert(3, os.path.join(BASE_DIR, 'plugin_apps'))

# 读取外部配置文件的配置器
conf = configurator(os.path.join(BASE_DIR, "config.ini"))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = conf.get('settings', 'secret_key')

# SECURITY WARNING: don't run with debug turned on in production!


ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',         # 管理站点
    'django.contrib.auth',          # 认证系统
    'django.contrib.contenttypes',  # 内容类型的框架
    'django.contrib.sessions',      # 会话框架
    'django.contrib.messages',      # 消息传递框架
    'django.contrib.staticfiles',   # 用于管理静态文件的框架

    'intros',
    'blogs',
    'forums',
    'tutorials',
    'users',
    'plugin_apps.wisewords',
    'plugin_apps.readnums',
    # 'plugin_apps.collects',
    'plugin_apps.comments',
    # 'plugin_apps.likenums',
    'images',
    # 'plugin_apps.files',

    # 'ckeditor',
    # 'ckeditor_uploader',
    'rest_framework',
    'corsheaders',                # 跨域请求处理 https://pypi.org/project/django-cors-headers/
    'django_filters',
    'rest_framework.authtoken',
    # 'captcha',
    # 'django_celery_results',    # 分布式任务功能，返回结果给django
    # 'django_celery_beat',       # 定时任务功能
    # 'dal',                      # 自动补全插件
    # 'dal_select2',              # 自动补全插件模式
]


MIDDLEWARE = [
    # 'django.middleware.cache.UpdateCacheMiddleware',          # （全站缓存）必须设置在第一个位置
    'corsheaders.middleware.CorsMiddleware',
    # 'users.middleware.user_id.UserIDMiddleware',                # 自定义生成uid，放入cookies中
    'django.middleware.security.SecurityMiddleware',            # 内置的安全机制
    'django.contrib.sessions.middleware.SessionMiddleware',     # 会话session功能
    'django.middleware.locale.LocaleMiddleware',                # 使用中文
    'django.middleware.common.CommonMiddleware',                # 处理请求信息，规范化请求内容
    'django.middleware.csrf.CsrfViewMiddleware',                # 开启CSRF防护功能
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # 内置的用户认证系统
    'django.contrib.messages.middleware.MessageMiddleware',     # 内置的信息提示功能
    'django.middleware.clickjacking.XFrameOptionsMiddleware',   # 防止恶意程序点击劫持
    # 'forum.middle.IPsMiddleware',
    # 'django.middleware.cache.FetchFromCacheMiddleware',       # （全站缓存）必须设置在最后一个位置
]
# 允许跨域
CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'yanzhe.urls'
WSGI_APPLICATION = 'yanzhe.wsgi.application'
# 扩展User字段
AUTH_USER_MODEL = "users.YZUser"

ARTICLE_MODEL = "tutorials.Article"
POST_MODEL = "blogs.Post"
NOTE_MODEL = "forums.Note"

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        # 'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'zh-hans'       # 'en-us'

TIME_ZONE = 'Asia/Shanghai'     # 'UTC'

USE_I18N = True

USE_L10N = True
# USE_TZ = True >>> RuntimeWarning:DateTimeField  DateTimeField Note.create_time received a naive datetime 。
USE_TZ = False
# 默认是Ture，时间是utc时间，由于我们要用本地时间，所用手动修改为false！！！！


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'collected_static')
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static'),
#     # '/home/cml0660/sites/Myblog/BlogCML/media/',
# ]

# media
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIAFILES_DIRS = [
    os.path.join(BASE_DIR, 'media'),
]


# >>>>>>>>>>>>>>>>>>>>>>>>>> tinymce <<<<<<<<<<<<<<<<<<<<<<<<<<
TINYMCE_DEFAULT_CONFIG = {
    'theme': 'advanced',
    'width': 600,
    'height': 400,
}
# >>>>>>>>>>>>>>>>>>>>>>>>>> tinymce <<<<<<<<<<<<<<<<<<<<<<<<<<

# 文章列表的分页数量
EACH_PAGE_BLOGS_NUMBER = 10


# >>>>>>>>>>>>>>>>>>>>>>>>>> 邮件设置 <<<<<<<<<<<<<<<<<<<<<<<<<<
# 邮箱设置
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.qq.com'
EMAIL_PORT = 25
EMAIL_HOST_USER = conf.get('qq_email', 'host_user')           # 登陆你的 QQ 账号
EMAIL_HOST_PASSWORD = conf.get('qq_email', 'host_pwd')        # 授权码（不是你的 QQ 密码！！！）
# EMAIL_HOST_PASSWORD = "xxxx"                                # 你的邮箱密码
# EMAIL_USE_SSL = True                                        # 设置与邮件服务器的连接方式为SSL，与TLS不能同时存在
EMAIL_USE_TLS = True                                          # 这里必须是 True，否则发送不成功
EMAIL_FROM = conf.get('qq_email', 'email_from')               # 邮件发送的 QQ 账号
DEFAULT_FROM_EMAIL = '言者 <{}>'.format(EMAIL_FROM)            # 自定义名称头
# >>>>>>>>>>>>>>>>>>>>>>>>>> 邮件设置 <<<<<<<<<<<<<<<<<<<<<<<<<<


# TODO 加入自定义后无法登陆了
# 用户登陆的字段自定义（手机登陆/邮箱登陆/用户名登陆）
# AUTHENTICATION_BACKENDS = (
#     'apps.users.backend.CustomBackend',
# )


# 云片网短信验证的apikey
YUNPIAN_APIKEY = conf.get('yunpian', 'yunpian_apikey')

# >>>>>>>>>>>>>>>>>>>>>>>>>> qiniu <<<<<<<<<<<<<<<<<<<<<<<<<<
# 需要填写你的 Access Key 和 Secret Key
QN_ACCESS_KEY = conf.get('qiniu', 'access_key')
QN_SECRET_KEY = conf.get('qiniu', 'secret_key')
QN_BUCKET_NAME = 'cmlblog'  # 要上传的空间
QN_DOMIAN_NAME = 'http://cml.ac.cn/'  # 域名
QN_TOKEN_EXP = 3600  # token的过期时间
# >>>>>>>>>>>>>>>>>>>>>>>>>> qiniu <<<<<<<<<<<<<<<<<<<<<<<<<<

# 导入所有扩展设置
from .expansion import *
