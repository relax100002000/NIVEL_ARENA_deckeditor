# Downloads all 85 BT03 card images from kenwei-f/NIVEL-ARENA-DECK-SYSTEM
# into img\card\ with the local naming scheme (BT03-XXX.png, no rarity suffix).
#
# Run in PowerShell from the repo root:
#     powershell -ExecutionPolicy Bypass -File download_bt03_images.ps1
# Or just right-click -> Run with PowerShell.

$ErrorActionPreference = 'Continue'
$base = 'https://kenwei-f.github.io/NIVEL-ARENA-DECK-SYSTEM/images'
$dest = Join-Path $PSScriptRoot 'img\card'

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest | Out-Null
}

# id -> rarity-suffix filename on the source
$cards = @(
    @('BT03-001','L'),  @('BT03-002','C'),  @('BT03-003','C'),  @('BT03-004','R'),  @('BT03-005','C'),
    @('BT03-006','SR'), @('BT03-007','C'),  @('BT03-008','R'),  @('BT03-009','SR'), @('BT03-010','R'),
    @('BT03-011','UR'), @('BT03-012','C'),  @('BT03-013','C'),  @('BT03-014','C'),  @('BT03-015','R'),
    @('BT03-016','C'),  @('BT03-017','C'),  @('BT03-018','L'),  @('BT03-019','R'),  @('BT03-020','SR'),
    @('BT03-021','C'),  @('BT03-022','R'),  @('BT03-023','C'),  @('BT03-024','C'),  @('BT03-025','R'),
    @('BT03-026','C'),  @('BT03-027','SR'), @('BT03-028','UR'), @('BT03-029','C'),  @('BT03-030','C'),
    @('BT03-031','R'),  @('BT03-032','C'),  @('BT03-033','C'),  @('BT03-034','C'),  @('BT03-035','L'),
    @('BT03-036','C'),  @('BT03-037','C'),  @('BT03-038','R'),  @('BT03-039','SR'), @('BT03-040','R'),
    @('BT03-041','SR'), @('BT03-042','C'),  @('BT03-043','C'),  @('BT03-044','UR'), @('BT03-045','R'),
    @('BT03-046','C'),  @('BT03-047','C'),  @('BT03-048','R'),  @('BT03-049','C'),  @('BT03-050','C'),
    @('BT03-051','C'),  @('BT03-052','L'),  @('BT03-053','C'),  @('BT03-054','C'),  @('BT03-055','R'),
    @('BT03-056','C'),  @('BT03-057','SR'), @('BT03-058','C'),  @('BT03-059','R'),  @('BT03-060','SR'),
    @('BT03-061','UR'), @('BT03-062','R'),  @('BT03-063','C'),  @('BT03-064','C'),  @('BT03-065','R'),
    @('BT03-066','C'),  @('BT03-067','C'),  @('BT03-068','C'),  @('BT03-069','L'),  @('BT03-070','C'),
    @('BT03-071','C'),  @('BT03-072','C'),  @('BT03-073','R'),  @('BT03-074','R'),  @('BT03-075','C'),
    @('BT03-076','SR'), @('BT03-077','UR'), @('BT03-078','C'),  @('BT03-079','SR'), @('BT03-080','R'),
    @('BT03-081','C'),  @('BT03-082','C'),  @('BT03-083','C'),  @('BT03-084','C'),  @('BT03-085','C')
)

$ok = 0; $fail = 0
foreach ($c in $cards) {
    $id = $c[0]; $rar = $c[1]
    $url  = "$base/$id-$rar.png"
    $file = Join-Path $dest "$id.png"
    if (Test-Path $file) {
        Write-Host "skip $id (exists)"
        $ok++
        continue
    }
    try {
        Invoke-WebRequest -Uri $url -OutFile $file -UseBasicParsing
        Write-Host "ok   $id"
        $ok++
    } catch {
        Write-Warning "FAIL $id from $url : $($_.Exception.Message)"
        $fail++
    }
}
Write-Host ""
Write-Host "Done. ok=$ok fail=$fail total=$($cards.Count)"
