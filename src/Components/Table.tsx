import { Key, ReactNode } from "react";

export interface ColDef {
  header: string;
  field: string;
}

export type Rows = Array<Record<string, ReactNode> & { key: Key | null | undefined}>

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
              <th key={col.field}>{col.header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row.key}>
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