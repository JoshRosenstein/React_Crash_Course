import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ProjectItem extends Component {

    deleteProject(id){
        //console.log('test');
        this.props.onDelete(id);
    }

    render() {
        //console.log(this.props);
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>:{this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.PropTypes.object,
    onDelete: PropTypes.PropTypes.func
}

export default ProjectItem;
