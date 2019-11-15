import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    RadialBarChart,
    RadialBar
} from "recharts";

import SubPageStaticContentTemplate from "../SubPageContents/SubPageStaticContentTemplate";
import StickerDetailView from "../SubPageContents/StickerDetailView";

import Chip from "@material-ui/core/Chip";
import SubPageTemplate from "../SubPageTemplate";

function ChartContent({ title, children }) {
    return (
        <div className="chart-content">
            <div
                className="chart-content__title"
                style={{
                    marginBottom: "50px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 300,
                    fontSize: "1.2rem"
                }}
            >
                {title}
            </div>
            {children}
        </div>
    );
}

class StickerManagementInformation extends React.Component {
    render() {
        return (
            <div className="one-sticker-management">
                <SubPageStaticContentTemplate title="스티커 종류">
                    <Chip label="Animated Sticker"></Chip>
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="스티커 이름">
                    헬로! 라이언
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="키워드">
                    <Chip label="#동물"></Chip>
                    <span> </span>
                    <Chip label="#사자"></Chip>
                    <span> </span>
                    <Chip label="#귀여운"></Chip>
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="스티커 스토리">
                    귀여운 사자 라이언의 여러가지 모습을 볼 수 있는 이모티콘
                    입니다.
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="지원 언어">
                    <Chip label="한국어"></Chip>
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="판매가격">
                    <Chip label="$ 1.9"></Chip>
                </SubPageStaticContentTemplate>
                <SubPageStaticContentTemplate title="연결된 서비스">
                    <Chip label="iMessage" color="primary"></Chip>
                    <span> </span>
                    <Chip label="WhatsApp" color="primary"></Chip>
                    <span> </span>
                    <Chip label="facebook" color="primary"></Chip>
                    <span> </span>
                </SubPageStaticContentTemplate>
            </div>
        );
    }
}

const countrySelldata = [
    { name: "한국", selling: 452 },
    { name: "미국", selling: 302 },
    { name: "일본", selling: 411 },
    { name: "베트남", selling: 278 },
    { name: "중국", selling: 189 },
    { name: "영국", selling: 239 },
    { name: "남미", selling: 89 }
];

class CountrySellChart extends React.Component {
    render() {
        return (
            <BarChart width={800} height={300} data={countrySelldata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="selling" fill="#8884d8" />
            </BarChart>
        );
    }
}

const ageData = [
    {
        name: "18-24",
        uv: 31.47,
        pv: 1021,
        fill: "#8884d8"
    },
    {
        name: "25-29",
        uv: 26.69,
        pv: 962,
        fill: "#83a6ed"
    },
    {
        name: "30-34",
        uv: 15.69,
        pv: 341,
        fill: "#8dd1e1"
    },
    {
        name: "35-39",
        uv: 8.22,
        pv: 221,
        fill: "#82ca9d"
    },
    {
        name: "40-49",
        uv: 8.63,
        pv: 121,
        fill: "#a4de6c"
    },
    {
        name: "50+",
        uv: 2.63,
        pv: 142,
        fill: "#d0ed57"
    }
];

const style = {
    top: 0,
    left: 750,
    lineHeight: "30px"
};

function AgeSellChart() {
    return (
        <RadialBarChart
            width={800}
            height={300}
            cx={390}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={ageData}
        >
            <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="uv"
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
            />
        </RadialBarChart>
    );
}

const navigationData = [
    {
        title: "스티커 등록",
        link: "/mystudio/sticker-register"
    },
    {
        title: "스티커 관리",
        link: "/mystudio/sticker-manage"
    },
    {
        title: "계정 관리",
        link: "/mystudio/account-manage"
    },
    {
        title: "지갑",
        link: "/mystudio/wallet"
    }
];

export default () => {
    return (
        <SubPageTemplate
            header="마이 스튜디오"
            data={navigationData}
            contentsJSX={[
                <StickerManagementInformation />,
                <StickerDetailView title="스티커 목록"></StickerDetailView>,
                <ChartContent title="국가별 판매량">
                    <CountrySellChart></CountrySellChart>
                </ChartContent>,
                <ChartContent title="연령별 판매량">
                    <AgeSellChart></AgeSellChart>
                </ChartContent>
            ]}
        ></SubPageTemplate>
    );
};
