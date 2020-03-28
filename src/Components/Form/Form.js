import React, { Component } from "react";

import axios from "../../axios-base";

import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import classes from "./Form.module.css";

class Form extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        buttonDisable: true,
        error: false
    };

    componentDidUpdate() {
        console.log(this.state)
    }
    
    validateEmail(mail) {
        if (
            // eslint-disable-next-line
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
        ) {
            return true;
        }
        return false;
    }

    nameHandler = (e) => {
        var name = e.target.value;
         if(name.trim().length !== 0){
            this.setState({name: name});
            if (this.state.email.length > 0 && this.state.message.length > 0) {
                this.setState({ buttonDisable: false });
            }
         }
         else {
            this.setState({ buttonDisable: true });
         }
    }

    emailHandler = e => {
        if(this.validateEmail(e.target.value)){
            this.setState({ email: e.target.value});
            console.log(this.state.name,this.state.email)
            if(this.state.name.length > 0 && this.state.message.length > 0) {
                this.setState({buttonDisable: false})
            }
        }
        else{
            this.setState({buttonDisable: true});
        }
       
    };

    messageHandler = (e) => {
        var message = e.target.value;
        if (message.trim().length !== 0) {
            this.setState({ message: message });
            if (this.state.email.length > 0 && this.state.name.length > 0) {
                this.setState({ buttonDisable: false });
            }
        } else {
            this.setState({ buttonDisable: true });
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        axios.post("/Messages.json", data).then(
            this.setState({name: "", email: "", message: "", buttonDisable: true})
        )
        .catch(error => {
            this.setState({error:true})
        });
    };

    errorConfirmedHandler = ()=>{
        this.setState({error : false})
    }

    render() {
        return (
            <div className={classes["row"]}>
                <div className={classes["book"]}>
                    <div className={classes["book__form"]}>
                        <form className={classes["form"]}>
                            <div className={classes["form__group"]}>
                                <input
                                    type="text"
                                    className={classes["form__input"]}
                                    placeholder="Full name"
                                    id="name"
                                    required
                                    value={this.state.name}
                                    onChange={this.nameHandler}
                                />
                                <label
                                    htmlFor="name"
                                    className={classes["form__label"]}
                                >
                                    Full name
                                </label>
                            </div>

                            <div className={classes["form__group"]}>
                                <input
                                    type="email"
                                    className={classes["form__input"]}
                                    placeholder="Email address"
                                    id="email"
                                    onChange={this.emailHandler}
                                    value={this.state.email}
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className={classes["form__label"]}
                                >
                                    Email address
                                </label>
                            </div>

                            <div className={classes["form__group"]}>
                                <input
                                    type="textbox"
                                    className={classes["form__input"]}
                                    placeholder="Message"
                                    id="message"
                                    required
                                    value={this.state.message}
                                    onChange={this.messageHandler}
                                />
                                <label
                                    htmlFor="message"
                                    className={classes["form__label"]}
                                >
                                    Message
                                </label>
                            </div>

                            <div className={classes["form__group"]}>
                                <button
                                    
                                    className={[
                                        classes["btn"],
                                        classes["btn--green"]
                                    ].join(" ")}
                                    onClick={this.submitHandler}
                                    disabled={this.state.buttonDisable}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WithErrorHandler(Form,axios);
