import { ReactNode } from "react";

export interface ColDef {
  header: string;
  field: string;
}

export type Rows = Record<string, ReactNode>[]

export interface TableProps {
  colDefs: ColDef[];
  data: Rows;
}

export function Table({colDefs, data}: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {
            colDefs.map((col) => (
              <th key={col.header}>{col.header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row.id}>
              {
                colDefs.map((col) => (
                  <td key={col.field}>
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