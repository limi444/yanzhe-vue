module.exports = {
    devServer: {
        proxy: {
            // '/api': {
            //   target: '<url>',
            //   ws: true,
            //   changeOrigin: true
            // },
            '/mmbiz_jpg/': {
                target: 'https://mmbiz.qpic.cn/mmbiz_jpg',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
