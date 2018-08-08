import styled from 'styled-components';

export const Sidebar = styled.div`

    .menu {
        background: #FFF;
        border-radius: 50%;
        top: 0;
        box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
        cursor: pointer;
        height: 60px;
        position: absolute;
        right: 0;
        transition:  box-shadow 1.1s cubic-bezier(.19,1,.22,1);
        width: 60px;
        z-index: 2;

        &:hover{
            box-shadow: 0 0 0 8px #FFF, 0 0 0 8px #FFF;
        }

        .hamburger {
            position: relative;
            top: 29px;
            left: 15px;
            width: 30px;
            height: 2px;
            background: #000;
            display: block;
            transform-origin: center;
            transition: .5s ease-in-out;

            &:before, &:after {
                background: #000;
                content: "";
                display: block;
                transition: .5s ease-in-out;
                position: absolute;
                width: 100%;
                height: 100%;
            }
            &:before{
                top: -10px;
            }
            &:after{
                bottom: -10px;
            }
        }
    }

    input {
        display: none;

        &:checked ~ label {
            .menu{
                box-shadow: 0 0 0 130vw transparent, 0 0 0 130vh transparent;
            }
            .hamburger {
                transform: rotate(45deg);
                &:after{
                    transform: rotate(90deg);
                    bottom: 0;
                }
                &:before{
                    transform: rotate(90deg);
                    top: 0;
                }
            }
        }
    }

    input:checked ~ ul {
        opacity: 1;
        visibility: visible;
    }

    ul {
        position: absolute;
        top: 45%;
        right: -7%;
        width: 100%;
        max-width: 20%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        list-style: none;
        font-size: 17px;
        opacity: 0;
        -webkit-transition: .25s .1s cubic-bezier(0,1.07,0,1.02);
        transition: .25s .1s cubic-bezier(0,1.07,0,1.02);
        visibility: initial;
        z-index: 2;

        a {
            color: #00cec9;
            display: block;
            margin-bottom: 1em;
            text-decoration: none;
        }
    }

    /** Glamorous **/
    .css-glamorous-div--1j2xagg{
        border-bottom: 1px solid #dfdfdf;
        width: 95.5%;
        margin: 0 auto;
    }
    .css-glamorous-div--u634dh, .css-glamorous-div--1e508ws, .css-glamorous-div--1w2qxkb{
        height: 1px;
        top: 100%;
    }

    .css-glamorous-div-1ngwfw4{
        padding: 10px 20px;
    }

    .css-glamorous-div--u634dh, .css-glamorous-div--1e508ws, .css-glamorous-div--1w2qxkb{
        background-color: #267747;
    }

    .css-glamorous-div-1ngwfw4{
        ul{
            display: flex;
            list-style: none;

            li{
                flex: 1;
                background-color: #444040;
                color: #797373;
                padding: 30px;
                margin: 5px;
                text-align: center;
            }
        }
    }

    .itens{
        display: flex;

        .item{
            padding: 15px 12px;

            .flex-item-1 {
                flex: 1;
            }

            h3{
                color: #999b9c;
                font-size: 14px;
            }
            p{
                color: #999b9c;
                line-height: 17px;
                font-size: 12px;
            }
            .fa{
                font-size: 30px;
                text-align: center;
                display: block;
                color:#494c4f;
            }
            h4{
                font-size: 12px;
                text-align: center;
                min-width: 45px;
                margin-top: 2px;
                color:#494c4f;
            }
        }
    }

    .tabs-container {
        height: 60vh;
        max-width: 98%;
        p{
            margin: 0;
            padding: 0;
        }
        &:after{
            content: '.';
            display: block;
            clear: both;
            height: 0;
            font-size: 0;
            line-height: 0;
            visibility: none;
        }
        input{
            .tabs {
                display: none;
            }
        }
        .tabs + label {
            line-height: 40px;
            padding: 0 20px;
            float: left;
            background: transparent;
            color: #fff;
            cursor: pointer;
            transition: background ease-in-out .3s;
            &:checked + label{
                color: #fff;
                background: transparent;
                border-bottom:1px solid #267747;
                z-index: 9999;
            }
        }

        .tabs + label + div {
            width: 100%;
            opacity: 0;
            position: absolute;
            background: transparent;
            color: #fff;
            top: 40px;
            left: 0;
            height: 300px;
            padding: 10px;
            z-index: -1;
            transition: opacity ease-in-out .3s;
        }
        input.tabs:checked + label + div {
            opacity: 1;
            z-index: 1000;
            border-top: 1px solid #dfdfdf;
        }
    }

    .half {
        float: left;
        width: 50%;
        padding: 0 1em;

        /* Acordeon styles */
        .tab {
            position: relative;
            margin-bottom: 1px;
            width: 100%;
            color: #fff;
            overflow: hidden;
            
            input {
                position: absolute;
                opacity: 0;
                z-index: -1;
            }
        }
    }
    label {
        position: relative;
        display: block;
        padding: 0;
        background: #16a085;
        font-weight: normal;
        line-height: 3;
        cursor: pointer;
    }

    .blue{
        label {
            background: transparent;
            border-bottom: 1px solid #675b5b;
            color: #abaeaf;
            font-size: 14px;
        }
        .tab-content {
            max-height: 0;
            overflow: auto;
            background: #1abc9c;
            -webkit-transition: max-height .35s;
            -o-transition: max-height .35s;
            transition: max-height .35s;
            background: transparent;

            p {
                margin: 0;
                font-size: 12px;
                color: #abaeaf;
            }
            img{
                max-width: 100%;
            }
        }
        /* :checked */
        input{
            &:checked ~ .tab-content {
                max-height: 40em;
            }
        }      
    }
    /* Icon */
    label{
    &:after {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        width: 3em;
        height: 3em;
        line-height: 3;
        text-align: center;
        -webkit-transition: all .35s;
        -o-transition: all .35s;
        transition: all .35s;
        }
    }

    input[type=checkbox] + label::after {
    content: "\f01d";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    margin: -11px -17px 0 0;
    }
    .half{
        input[type=radio] + label::after {
            content: "\f01d";
            font-family: FontAwesome;
            font-style: normal;
            font-weight: normal;
            font-size: 21px;
            margin: -11px -17px 0 0;
        }
    }
    input[type=checkbox]:checked + label::after {
        transform: rotate(85deg);
    }
    input[type=radio]:checked + label::after {
        transform: rotate(85deg);
    }
`;

