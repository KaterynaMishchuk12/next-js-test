import React from 'react';
import Header from '../components/header';
import SearchInput from '../components/search-input';
import Toolbar from '../components/toolbar';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';

export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={}
          category={}
          company={}
          promotion={}
          country={}
          joinedDate={}
        />
      </CompanyTable>
    </>
  );
}
