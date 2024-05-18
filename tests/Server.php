<?php

/**
 * Imagine this is a real human taking seconds to response
 */

sleep(random_int(1, 15));

echo json_encode($_POST);
