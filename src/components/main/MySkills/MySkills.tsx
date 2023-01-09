import React, {Component} from 'react';
import {SkillsCard} from "./SkillsCard/SkillsCard";
import styles from "./MySkills.module.css"

export class MySkills extends Component {
    render() {
        return (
            <div className={styles.mySkillsContainer}>
                <div className={styles.mySkills}>
                    <div className={styles.mySkillsTop}>
                        <h2>Мои скиллы</h2>
                    </div>
                    <div className={styles.mySkillsBottom}>
                        <SkillsCard skillsDescription={'Js'} skillName={'JS'}/>
                        <SkillsCard skillsDescription={'Css'} skillName={'Css'}/>
                        <SkillsCard skillsDescription={'React'} skillName={'React'}/>
                    </div>
                </div>
            </div>
        );
    }
}
