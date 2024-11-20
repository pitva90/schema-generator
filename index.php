<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schema.org - Generator</title>
  <link rel="stylesheet" type="text/css" href="style.css?v=0.3">
  <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  <script src="script.js?v=0.4"></script>
</head>

<body>
  <div class="container">
    <div class="top-wrap">
      <h1>Schema.org - Generator <span class="version">v. 0.0.1</span> <span>by Pitva</span></h1>
    </div>

    <div id="organization" class="tab-item active">
      <?php include('schema/organization.php'); ?>
    </div>
  </div>
</body>
</html>
