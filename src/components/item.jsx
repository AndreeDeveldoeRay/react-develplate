/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T00:41:51+02:00
*/



var React = require('react'), {connect} = require('react-redux')

export var Item = React.createClass({
    render: function () {
        var {title,genre} = this.props
        return <li>{title}, {genre}</li>
    }
})
export default connect()(Item)
