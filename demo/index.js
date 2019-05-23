import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 单表查询","code":"/**\n *\n * @title 单表查询\n * @description 这是描述\n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Pagelayout from \"ac-pagelayout\";\n\nconst Header = Pagelayout.Header;\nconst SearchArea = Pagelayout.SearchArea;\nconst TableContent = Pagelayout.TableContent;\n\nclass Demo1 extends Component {\n    render() {\n        return (    \n            <div>\n                <Pagelayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <TableContent>\n                        我是表格区域\n                    </TableContent>\n                </Pagelayout>\n            </div>\n        )\n    }\n}\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 树表/卡","code":"/**\n *\n * @title 树表/卡\n * @description 这是描述\n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Pagelayout from \"ac-pagelayout\";\n\nconst Header = Pagelayout.Header;\nconst SearchArea = Pagelayout.SearchArea;\nconst TableContent = Pagelayout.TableContent;\nconst LeftContent = Pagelayout.LeftContent;\nconst RightContent = Pagelayout.RightContent;\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n                <Pagelayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                        <LeftContent>\n                            我是树区域\n                        </LeftContent>\n                        <RightContent>\n                            <SearchArea>\n                                我是查询区域\n                            </SearchArea>\n                            <TableContent>\n                                我是表格区域\n                            </TableContent>\n                        </RightContent>\n                    \n                </Pagelayout>\n            </div>\n        )\n    }\n}\n","desc":" 这是描述"},{"example":<Demo3 />,"title":" 主子表","code":"/**\n *\n * @title 主子表\n * @description 主子表(左右)\n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Pagelayout from \"ac-pagelayout\";\n\nconst Header = Pagelayout.Header;\nconst SearchArea = Pagelayout.SearchArea;\nconst TableContent = Pagelayout.TableContent;\n\nclass Demo3 extends Component {\n    render() {\n        return (\n            <div>\n                <Pagelayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <TableContent>\n                        我是表格区域主表\n                    </TableContent>\n                    <TableContent>\n                        我是表格区域子表\n                    </TableContent>\n                </Pagelayout>\n            </div>\n        )\n    }\n}\n","desc":" 主子表(左右)"},{"example":<Demo4 />,"title":" 主子表","code":"/**\n *\n * @title 主子表\n * @description 主子表(左右)\n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Pagelayout from \"ac-pagelayout\";\n\nconst Header = Pagelayout.Header;\nconst SearchArea = Pagelayout.SearchArea;\nconst TableContent = Pagelayout.TableContent;\nconst LeftContent = Pagelayout.LeftContent;\nconst RightContent = Pagelayout.RightContent;\n\nclass Demo4 extends Component {\n    render() {\n        return (\n            <div>\n                <Pagelayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <LeftContent>\n                        <TableContent>\n                            我是表格区域主表\n                        </TableContent>\n                    </LeftContent>\n                    <RightContent>\n                        <TableContent>\n                            我是表格区域子表\n                        </TableContent>\n                    </RightContent>\n                   \n                </Pagelayout>\n            </div>\n        )\n    }\n}\n","desc":" 主子表(左右)"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
