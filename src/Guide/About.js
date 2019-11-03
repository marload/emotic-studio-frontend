import React from "react";

import "./scss/About.scss";

function About() {
    return (
        <div className="about">
            <h3 className="about__title">방향성</h3>
            <p className="about__paragraph">
                EmoticBox는 크리에이터님들의 표현의 자유를 지지합니다. <br></br>
                기존 이모티콘들은 특정 기업의 방향성에 맞춰 제작, 수정 되었으며
                엄격한 기업의 심사가 요구되었습니다. <br></br>
                이젠 EmoticBox가 모든 종류와 모든 표현을 수용하고, 그들이 사용될
                수 있는 기업들과 연결시켜 드립니다.
            </p>
            <p className="about__paragraph">
                EmoticBox가 최대한 여러분들의 표현을 수용하는 만큼, 여러분들은{" "}
                <u>
                    <strong>저작권</strong>
                </u>
                이나{" "}
                <u>
                    <strong>비지니스 이모티콘 절차</strong>
                </u>{" "}
                <br></br>
                보편적으로 수용하기 힘든{" "}
                <u>
                    <strong>비윤리적 표현</strong>
                </u>{" "}
                최소한 규정을 지켜주시면 됩니다.
            </p>
            <img
                className="about__image"
                src="/images/guide.jpeg"
                alt="guide"
            ></img>
        </div>
    );
}

export default About;
