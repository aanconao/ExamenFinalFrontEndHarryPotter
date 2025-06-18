import { PageProps } from "$fresh/server.ts";

export default function LayoutFooter({ Component }: PageProps) {
  return (
    <div class="layoutContainer">
      <div class="conteinerIndex"></div>
      <Component />
      <div class="layout-footer">
        <h1>EXAMEN FINAL HARRY POTTER</h1>
      </div>
    </div>
  );
}
