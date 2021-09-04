import React from "react";

import "./style.css";


const Signup=()=>{
    return(
        <>
       

        

        <div class="container-form-signup">
        <div class="right_img">
        <div class="left_stop">
               <h1>Welcome to stopNshop !</h1>
               
               <p>To keep connected with us please login with your personal info</p>
               <div class="left_form_details">
                       <a href="/sign"><input id="login" type="submit" value="LOG IN"></input></a>
                    </div>
            </div>
           
            </div>
        <div class="right_form">
              <div class="right_form_head">
              <h1>Sign up</h1>
              <p>Enter your personal details and start journey with us</p>
              <div class="social_form">
              <a><i class="fab fa-twitter"></i></a>
               <a><i class="fab fa-facebook-f"></i></a>
               <a><i class="fab fa-google"></i></a>
              </div>
              <p class="sign_p">or use your account</p>
             </div> 
             <div class="right_form_text">
                <form>
                    <div class="right_form_details">
                       <input type="text" placeholder="Enter Name"></input>
                    </div>
                    <div class="right_form_details">
                       <input type="email" placeholder="Enter Email"></input>
                    </div>
                    <div class="right_form_details">
                       <input type="password" placeholder="Enter Password"></input>
                    </div>
                    
                    <div class="right_form_details">
                       <input type="submit" value="SIGN UP"></input>
                    </div>
                </form>
                <p id="sign_hidden">Already Have an account?<a href="/sign">SignIn</a></p>
             </div>
            
              </div>
              
             
        </div>
       
        </>
    )
}
export default Signup;