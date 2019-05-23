/**
 *
 * @title 树表/卡
 * @description 这是描述
 *
 */
import React, { Component } from 'react';
import Pagelayout from '../../src';

const Header = Pagelayout.Header;
const SearchArea = Pagelayout.SearchArea;
const TableContent = Pagelayout.TableContent;
const LeftContent = Pagelayout.LeftContent;
const RightContent = Pagelayout.RightContent;

class Demo1 extends Component {
    render() {
        return (
            <div>
                <Pagelayout>
                    <Header>
                        我是Header区域
                    </Header>
                        <LeftContent>
                            我是树区域
                        </LeftContent>
                        <RightContent>
                            <SearchArea>
                                我是查询区域
                            </SearchArea>
                            <TableContent>
                                我是表格区域
                            </TableContent>
                        </RightContent>
                    
                </Pagelayout>
            </div>
        )
    }
}
export default Demo1