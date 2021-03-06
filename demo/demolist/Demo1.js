/**
 *
 * @title 单表查询
 * @description 
 *
 */
import React, { Component } from 'react';
import Pagelayout from '../../src';

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

class Demo1 extends Component {
    render() {
        return (    
            <div className="demo1">
                <Pagelayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <SearchArea>
                        我是查询区域
                    </SearchArea>
                    <TableContent>
                        我是表格区域
                    </TableContent>
                </Pagelayout>
            </div>
        )
    }
}
export default Demo1