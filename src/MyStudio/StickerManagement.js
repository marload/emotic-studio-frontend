import React from "react";

import SubPageTemplate from "../SubPageTemplate";

import StickerListView from "../SubPageContents/StickerListView";

class StickerManagementRejected extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "달려라, 고양이!",
                    link: "/images/emoji/cat.gif"
                }
            ]
        };
    }
    render() {
        return (
            <div className="sticker-management-rejected">
                <StickerListView
                    title="반려된 이모티콘"
                    data={this.state.data}
                ></StickerListView>
            </div>
        );
    }
}

class StickerManagementPending extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "가엽고 어린 튜브",
                    link: "/images/emoji/duck.gif"
                }
            ]
        };
    }
    render() {
        return (
            <div className="sticker-management-pending">
                <StickerListView
                    title="심사중인 이모티콘"
                    data={this.state.data}
                ></StickerListView>
            </div>
        );
    }
}

class StickerManagementRegistered extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "헬로! 라이언",
                    link: "/images/lion/1.gif"
                },
                {
                    title: "단팥빵의 하루",
                    link: "/images/emoji/bread.gif"
                }
            ]
        };
    }
    render() {
        return (
            <div className="sticker-management-registered">
                <StickerListView
                    title="등록된 이모티콘"
                    data={this.state.data}
                ></StickerListView>
            </div>
        );
    }
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
                <StickerManagementRejected></StickerManagementRejected>,
                <StickerManagementPending></StickerManagementPending>,
                <StickerManagementRegistered></StickerManagementRegistered>
            ]}
        ></SubPageTemplate>
    );
};
