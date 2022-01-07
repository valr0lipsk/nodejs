module.exports = class LogModel {
    constructor(route, method, params, body) {
        this.route = route
        this.method = method
        this.params = params
        this.body = body
        this.dateTime = new Date()
    }
}