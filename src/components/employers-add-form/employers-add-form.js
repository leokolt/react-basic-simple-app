import { Component } from 'react';

import './employers-add-form.css';



class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {

        if (this.state.name.length >= 3 && this.state.salary >=1 ) {
            e.preventDefault();
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            e.preventDefault();
          
            const div = document.querySelector('.app-add-form');
            const error = document.createElement('p');
            error.classList.add('error__message');
            div.appendChild(error);
            error.innerHTML += 'Введите имя, содержащее больше, чем три буквы и сумму премии больше 1$';
            setTimeout(() => error.remove(), 2000)
        }
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form"
                onSubmit = {this.onSubmit}>
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
    
        )
    
    }
}

export default EmployersAddForm;