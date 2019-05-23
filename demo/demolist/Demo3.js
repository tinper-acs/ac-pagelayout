/**
 *
 * @title 主子表
 * @description 主子表(左右)
 *
 */
import React, { Component } from 'react';
import Pagelayout from '../../src';

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;

class Demo3 extends Component {
    render() {
        return (
            <div>
                <Pagelayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <SearchArea>
                        我是查询区域
                    </SearchArea>
                    <TableContent>
                        我是表格区域主表
                    </TableContent>
                    <TableContent>
                        我是表格区域子表
                    </TableContent>
                </Pagelayout>
            </div>
        )
    }
}
export default Demo3