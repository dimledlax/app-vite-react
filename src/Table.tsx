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

export function Table({colDef, data}: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {
            colDef.map((col) => (
              <th>{col.header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr>
              {
                colDef.map((col) => (
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