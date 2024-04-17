import { ReactNode } from "react";

export interface ColDef {
  header: string;
  field: string;
}

export type Data = Record<string, ReactNode>[]

export interface TableProps {
  colDef: ColDef[];
  data: Data;
}

export function Table(props: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {
            props.colDef.map((col) => (
              <th>{col.header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((row) => (
            <tr>
              {
                props.colDef.map((col) => (
                  <td>
                    {row[col.field]}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}