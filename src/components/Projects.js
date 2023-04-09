
import React from "react";
import { projects } from "../data";
import Projectfocus from "./Projectfocus";


export default function Projects() {
    return (   
        <div className="flex flex-nowrap -m-4">
          {projects.map(function(project, i){
            return <Projectfocus project={project} key={i} />;
          })}
        </div>
    )

}