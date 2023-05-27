import React from "react";
import {VscGithubInverted } from "react-icons/vsc";
import {AiFillLinkedin } from "react-icons/ai";
import {BsDiscord} from "react-icons/bs";
function Footer() {
return(

<div className="py-5 text-center">  
<div className="flex justify-center gap-2">
    <a href="https://github.com/andreeeQ"><VscGithubInverted size={'2em'}/></a>
    <a href="https://www.linkedin.com/feed/"><AiFillLinkedin size={'2em'}/></a>
    <a href="https://www.discordapp.com/users/756478822286622745"><BsDiscord size={'2em'}/></a>
</div>
<p className="text-sm mt-2 opacity-50">
        &copy;{new Date().getFullYear()} Portfolio by Andre Quimio 

    </p>
</div>
)
}

export default Footer;