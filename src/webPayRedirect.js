import React from 'react'

class WebPayRedirect extends React.Component {
    
    componentDidMount(){
        console.log(this.props.webPayParams)
        document.getElementById("webpay-form").submit();
    }
    
    render(){

        const { url, inputName, token } = this.props.webPayParams;

        return (
    
            <div>
                <form id="webpay-form" action={url} method="post">
                    <input type="hidden" name={inputName} value={token} />
                </form>
            </div>
    
        );
    }


}

export default WebPayRedirect;