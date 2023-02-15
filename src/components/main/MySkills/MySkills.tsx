import React, {Component} from 'react';
import {SkillsCard} from "./SkillsCard/SkillsCard";
import styles from "./MySkills.module.scss"
import {Title} from "../../Common/Title";

export class MySkills extends Component {
    render() {
        return (
            <section className={styles.mySkillsContainer}>
                <div className={styles.mySkills}>
                    <div className={styles.mySkillsTop}>
                       <Title title={'My skills'}/>
                    </div>
                    <div className={styles.mySkillsBottom}>
                        <SkillsCard skillsDescription={'Js Description'} skillName={'JS'}/>
                        <SkillsCard skillsDescription={'Css Description'} skillName={'Css'}/>
                        <SkillsCard skillsDescription={'React Description'} skillName={'React'}/>
                    </div>
                </div>
            </section>
        );
    }
}
