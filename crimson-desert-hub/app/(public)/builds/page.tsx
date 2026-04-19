export const revalidate = 300;

export default function BuildsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold tracking-tight">Builds</h1>
      <p className="text-sm text-muted-foreground">
        Build tier lists and guides will populate here once we aggregate enough
        creator coverage. This page currently has no data — we don&apos;t show
        invented builds.
      </p>
    </div>
  );
}
