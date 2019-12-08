import React, { Component } from 'react';

class Dropdown extends Component {


  indent(tabs_count = 0) {
      var identation = "";
      for (var x = 1; x < tabs_count; x++) {
          identation += "\u00A0\u00A0\u00A0\u00A0";
      }
      return identation;
  }

  traverse(groups = {}, tabs = 0) {
      var data = [];
      for (var key in groups) {
          var link = "/group/" + groups[key].id;
          data.push(
            <a href={link}>
              <div className="dropdownRow">
                {this.indent(tabs + 1)} {groups[key].name}
              </div>
            </a>
          );

          if (groups[key].children != null) {
              data.push(this.traverse(groups[key].children, tabs + 1));
          }
      }
    return data;
  }


  render (){
    const { locationGroups } = this.props;

    return(this.traverse(locationGroups));
  }
}

export default Dropdown;

