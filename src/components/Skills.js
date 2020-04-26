import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill, index) => (
        <ul className="c-tags" key={index}><li className="c-tags__tag">{ skill }</li></ul>
    ));

    return (
        <section className="c-section p-skills">
            <header><h2 className="c-title">Skills</h2></header>
            { items }
        </section>
    );
};