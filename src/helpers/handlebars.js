const handlebar = require('handlebars')


module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        const icons = {
            default: 'fas fa-sort',
            asc: 'fas fa-sort-amount-up',
            desc: 'fas fa-sort-amount-down',
        }
        const types = {
            default: 'desc',
            desc: 'asc',
            asc: 'desc',

        }
        const icon = icons[sortType]
        const type = types[sortType]
        const address = handlebar.escapeExpression(`?_sort&column=${field}&type=${type}`)
        const output = ` <a href="${address}">
                     <span class="${icon}"></span>
                 </a>`
        return new handlebar.SafeString(output)
    }
}